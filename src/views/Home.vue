<template>
  <div>
    <div class="top-bar" v-scroll-reveal>
      <div class="horizontal-stack">
        <prismic-rich-text v-if="home" :field="home.data.email" />
        <prismic-rich-text v-if="home" :field="home.data.phone" />
      </div>

      <prismic-rich-text class="right-links" v-if="home" :field="home.data.lets_connect"/>
    </div>

    <div class="wrapper">
      <prismic-rich-text v-if="home" :field="home.data.intro" class="intro" v-scroll-reveal />

      <prismic-image v-if="home" :field="home.data.image" v-scroll-reveal />

      <div class="container top-space" v-scroll-reveal>
        <div class="heading-with-line">
          <h3>Projects</h3>
          <div class="line"></div>
        </div>
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

      <div class="container horizontal-stack top-space" v-scroll-reveal>
        <div>
          <div>
            <h3>About</h3>
            <prismic-rich-text v-if="home" :field="home.data.about" />
          </div>
          <div class="container">
            <h3>Extracurricular Activities</h3>
            <prismic-rich-text v-if="home" :field="home.data.extracurricular_activities" />
          </div>
          <div class="container">
            <h3>Fun facts</h3>
            <prismic-rich-text v-if="home" :field="home.data.fun_facts" />
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.top-bar {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: $space-large;
  align-content: space-around;
  width: 90%;
  margin: 1em auto 0;

  @include md {
    width: 80%;
    grid-template-columns: 1fr auto;
  }

  @include xl {
    width: 65%;
  }

  .horizontal-stack {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: $space-medium;
    justify-content: start;

    @include md {
      width: 80%;
      grid-template-columns: auto auto;
    }
  }

  .right-links {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: $space-medium;

    /deep/ p a {
      text-align: right;
    }
    
    @include md {
      width: 80%;
    }
  }
}

.wrapper {
  width: 90%;
  margin: 2em auto;

  @include md {
    width: 80%;
    margin: 10em auto;
  }

  @include xl {
    width: 65%;
  }

  .intro {
    margin-bottom: 2em;

    @include md {
      margin-bottom: $space-x-large * 2;
    }
  }

  /deep/ h1 {
    font-size: 1.5rem;
    font-family: "Hanken Grotesk Bold", sans-serif;
    line-height: 1.2;

    @include md {
      font-size: 2.5rem;
      line-height: 1.3;
    }

    @include lg {
      font-size: 4rem;
    }
  }

  /deep/ h2 {
    font-size: 1.2rem;

    @include md {
      font-size: 1rem;
    }

    @include lg {
      font-size: 1.5rem;
    }
  }

  /deep/ h3 {
    color: white;
    font-weight: 600;
    font-family: "Hanken Grotesk SemiBold";
    margin-bottom: $space-medium;
    text-transform: uppercase;

    @include md {
      margin-bottom: $space-medium;
    }
  }

  /deep/ h4 {
    color: white;
    font-weight: 600;
    font-family: "Hanken Grotesk SemiBold";
    margin-bottom: $space-base;
  }

  /deep/ strong {
    font-weight: 600;
    font-family: "Hanken Grotesk SemiBold";
  }

  .container {
    margin: $space-x-large 0 0;

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
    grid-template-columns: 1fr;
    grid-row-gap: $space-medium;

    @include md {
      grid-template-columns: auto 1fr;
      grid-column-gap: $space-x-large;
    }
  }

  .horizontal-stack {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: $space-x-large;

    @include md {
      grid-template-columns: 1fr 30%;
    }
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
    margin-top: $space-x-large * 1.4;
  }

  .bottom-space {
    margin-bottom: $space-medium;
  }

  .projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: $space-x-large;
    grid-row-gap: $space-x-medium;
    margin-bottom: $space-medium;

    /deep/ a {
      &:before, &:after {
        height: 0;
      }
      &:hover {
        opacity: 0.7;
      }
    }

    @include md {
      grid-template-columns: 1fr 1fr 1fr;
    }
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
