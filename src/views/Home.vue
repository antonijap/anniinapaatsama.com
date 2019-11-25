<template>
  <div class="wrapper">
    <prismic-rich-text v-if="home" :field="home.data.intro" class="intro" />
    <div class="container horizontal-stack-small">
      <div>
        <h3>Email</h3>
        <prismic-rich-text v-if="home" :field="home.data.email" />
      </div>
      <div>
        <h3>Phone</h3>
        <prismic-rich-text v-if="home" :field="home.data.phone" />
      </div>
    </div>

    <div class="container">
      <div class="heading-with-line">
        <h3>Projects</h3>
        <div class="line"></div>
      </div>
      <!-- <p class="bottom-space">To be updated!</p> -->
      <div class="projects">
        <div class="project" v-for="(project, index) in projects" :key="index">
          <router-link :to="`/${project.uid}`">
            <h4>{{ $prismic.richTextAsPlain(project.data.title) }}</h4>
            <p>{{ $prismic.richTextAsPlain(project.data.intro) }}</p>
          </router-link>
        </div>
      </div>
      <div class="line"></div>
    </div>

    <div class="container horizontal-stack top-space">
      <div>
        <div>
          <h3>About</h3>
          <prismic-rich-text v-if="home" :field="home.data.about" />
        </div>
        <div class="container">
          <h3>Extracurricular Activities</h3>
          <prismic-rich-text v-if="home" :field="home.data.extracurricular_activities" />
        </div>
      </div>

      <div>
        <div>
          <h3>Education</h3>
          <prismic-rich-text v-if="home" :field="home.data.education" />
        </div>
        <div class="container">
          <h3>Experience</h3>
          <prismic-rich-text v-if="home" :field="home.data.experience" />
        </div>
      </div>
    </div>

    <div class="container">
      <div>
        <h3>Fun facts</h3>
        <prismic-rich-text v-if="home" :field="home.data.fun_facts" />
      </div>

      <div class="top-space">
        <h3>Let's connect</h3>
        <prismic-rich-text v-if="home" :field="home.data.lets_connect" />
      </div>
    </div>
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
    width: 65%;
  }

  .intro {
    margin-bottom: $space-x-large * 2;
  }

  /deep/ h1 {
    font-size: 43px;
    line-height: 1.5;
  }

  /deep/ h3 {
    color: white;
    font-weight: 600;
    font-family: "Hanken Grotesk SemiBold";
    margin-bottom: $space-medium;
    text-transform: uppercase;
  }

  /deep/ h4 {
    color: white;
    font-weight: 600;
    font-family: "Hanken Grotesk SemiBold";
    margin-bottom: $space-base;
  }

  /deep/ strong {
    font-size: 18px;
    font-weight: 600;
    font-family: "Hanken Grotesk SemiBold";
  }

  .container {
    margin: $space-x-medium 0 0;

    .heading-with-line {
      display: grid;
      grid-template-columns: auto 1fr;
      grid-column-gap: 24px;
    }

    /deep/ p {
      margin-bottom: $space-medium;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .horizontal-stack-small {
    display: grid;
    grid-template-columns: 30% 30%;
  }

  .horizontal-stack {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: $space-x-large;
  }

  .line {
    background: $color-white;
    opacity: 0.2;
    width: 100%;
    display: block;
    transform: translateY(16px);
    height: 2px;
    position: relative;
  }

  .top-space {
    margin-top: $space-x-large;
  }

  .bottom-space {
    margin-bottom: $space-medium;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: $space-x-large;
    grid-row-gap: $space-x-medium;
    margin-bottom: $space-medium;
  }
}
</style>


<script>
export default {
  name: "Home",
  data() {
    return {
      home: null,
      projects: []
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client
        .query(
          this.$prismic.Predicates.any("document.type", ["home", "project"]),
          { orderings: "[my.project.order]" }
        )
        .then(response => {
          this.home = response.results;
          response.results.map(item => {
            if (item.type === "project") {
              this.projects.push(item);
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
