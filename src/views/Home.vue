<template>
  <div class="wrapper">
    <prismic-rich-text v-if="home" :field="home.data.intro" class="intro"/>
    <div class="container horizontal-stack-small">
      <div>
        <h3>Email</h3>
        <prismic-rich-text v-if="home" :field="home.data.email"/>
      </div>
      <div>
        <h3>Phone</h3>
        <prismic-rich-text v-if="home" :field="home.data.phone"/>
      </div>
    </div>

    <div class="container">
      <div class="heading-with-line">
        <h3>Projects</h3>
        <div class="line"></div>
      </div>
      <p class="bottom-space">To be updated!</p>
      <div class="line"></div>
    </div>

    <div class="container horizontal-stack top-space">
      <div>
        <div>
          <h3 class="about">About</h3>
          <prismic-rich-text v-if="home" :field="home.data.about"/>
        </div>
        <div class="container">
          <h3>Extracurricular Activities</h3>
          <prismic-rich-text v-if="home" :field="home.data.extracurricular_activities"/>
        </div>
      </div>

      <div>
        <div>
          <h3>Education</h3>
          <prismic-rich-text v-if="home" :field="home.data.education"/>
        </div>
        <div class="container">
          <h3>Experience</h3>
          <prismic-rich-text v-if="home" :field="home.data.experience"/>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div>
        <h3>Fun facts</h3>
        <prismic-rich-text v-if="home" :field="home.data.fun_facts"/>
      </div>

      <div class="top-space">
        <h3>Let's connect</h3>
        <div class="glitch-wrapper " data-text="GLITCH">GLITCH</div> 
        <prismic-rich-text v-if="home" :field="home.data.lets_connect"/>
      </div>
    </div>
    
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
    font-size: 1.4em;
    line-height: 1.5;

    @include md {
      font-size: 43px;
      line-height: 1.5;
    }
  }

  /deep/ h3 {
    color: white;
    font-weight: 600;
    font-family: 'Hanken Grotesk SemiBold';
    margin-bottom: $space-base;
    text-transform: uppercase;

    @include md {
      font-size: 18px;
      margin-bottom: $space-medium;
    }
  }

  /deep/ strong {
    font-weight: 600;
    font-family: 'Hanken Grotesk SemiBold';

    @include md {
      font-size: 18px;
    }
  }

  .container {
    margin: 2em 0 0;

    @include lg {
      margin: $space-x-medium 0 0;
    }

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
    grid-row-gap: $space-x-large;

    @include lg {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: $space-large;
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
    margin-top: $space-large;
    .about {
      margin-top: $space-x-large;

      @include lg {
        margin-top: 0
      }
    }
  }

  .bottom-space {
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
