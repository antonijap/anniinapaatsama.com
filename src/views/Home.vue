<template>
  <div class="wrapper">
    <prismic-rich-text v-if="home" :field="home.data.intro" class="intro"/>
    <prismic-rich-text v-if="home" :field="home.data.contact"/>
    <prismic-rich-text v-if="home" :field="home.data.about"/>
    <prismic-rich-text v-if="home" :field="home.data.education"/>
    <prismic-rich-text v-if="home" :field="home.data.experience"/>
    <prismic-rich-text v-if="home" :field="home.data.extracurricular_activities"/>
    <prismic-rich-text v-if="home" :field="home.data.fun_facts"/>
    <prismic-rich-text v-if="home" :field="home.data.lets_connect"/>
    <!-- <div class="projects">
      <div class="project" v-for="(work, index) in works" :key="index">
        <span>{{ $prismic.richTextAsPlain(work.data.title) }}</span>
        <router-link :href="`/${work.uid}`">
          <img :src="work.data.promo_image.url">
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.wrapper {
  width: 90%;
  margin: 4em auto;

  @include md {
    width: 80%;
    margin: 10em auto;
  }

  @include xl {
    width: 60%;
  }

  /deep/ h1 {
    font-size: 48px;
  }

}
</style>


<script>
export default {
  name: "Home",
  data() {
    return {
      home: null,
      works: []
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client
        .query(
          this.$prismic.Predicates.any("document.type", ["home"])
          // { orderings: "[my.work.order]" }
        )
        .then(response => {
          this.home = response.results;
          response.results.map(item => {
            console.log(item);
            
            if (item.type === "work") {
              this.works.push(item);
            } else if (item.type === "home") {
              this.home = item;
            }
          });
        });
    }
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>
