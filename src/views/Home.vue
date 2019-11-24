<template>
  <div class="wrapper">
    <!-- <prismic-rich-text v-if="homepage" :field="homepage.data.title"/>
    <div class="projects">
      <div class="project" v-for="(work, index) in works" :key="index">
        <span>{{ $prismic.richTextAsPlain(work.data.title) }}</span>
        <router-link :href="`/${work.uid}`">
          <img :src="work.data.promo_image.url">
        </router-link>
      </div>
    </div>
    <div class="copy">
      <prismic-rich-text v-if="homepage" :field="homepage.data.slot_1"/>
    </div>-->
    <p>Anniina Paatsama</p>
    <p>hi@anniinapaatsama.com</p>
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

  /deep/ p {
    font-size: 22px;
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;
    margin-bottom: $space-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: $space-base;
    grid-row-gap: $space-base;
    margin-bottom: $space-base * 8;
    margin-top: $space-base * 8;

    @include md {
      grid-template-columns: 1fr 1fr;
      margin-bottom: $space-base * 16;
      margin-top: $space-base * 16;
    }

    .project {
      position: relative;
      overflow: hidden;

      img {
        transition: transform 100ms ease-in;

        &:hover {
          transform: scale(1.1);
        }
      }

      span {
        position: absolute;
        bottom: $space-medium;
        left: $space-medium;
        color: #ccc;
        font-size: 22px;
        z-index: 9999;
      }
    }
  }
}
</style>


<script>
export default {
  name: "Home",
  data() {
    return {
      homepage: null,
      works: []
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client
        .query(
          this.$prismic.Predicates.any("document.type", ["work", "homepage"]),
          { orderings: "[my.work.order]" }
        )
        .then(response => {
          this.home = response.results;
          response.results.map(item => {
            if (item.type === "work") {
              this.works.push(item);
            } else if (item.type === "homepage") {
              this.homepage = item;
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
