<template>
  <div class="wrapper">
    <a class="back" href="/">Back</a>
    <prismic-rich-text v-if="project" :field="project.data.title" />
    <prismic-image v-if="project.data.image" :field="project.data.image" />
    <prismic-rich-text class="intro" v-if="project" :field="project.data.intro" />
    <prismic-rich-text v-if="project" :field="project.data.description" />
    <prismic-rich-text v-if="project" :field="project.data.case" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.wrapper {
  width: 90%;
  margin: 4em auto;
  
  /deep/ a {
    font-size: 1.2em;
    line-height: 1.8;
    color: rgb(115, 176, 255);
  }

  @include md {
    width: 80%;
    margin: 10em auto;
  }

  @include xl {
    width: 60%;
  }

  &:first-child img {
    margin-bottom: $space-x-large;
  }

  .back {
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;
    margin-bottom: $space-x-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  /deep/ ol {
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;
    margin-bottom: $space-x-medium;
    
    li {
      font-size: 1.2em;
      line-height: 1.8;
      margin-left: $space-medium;
    }

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  /deep/ h1 {
    font-size: 3em;
    line-height: 1.2;
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;
    margin-bottom: $space-x-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  /deep/ h2 {
    margin-bottom: $space-base;;
    margin-top: $space-medium;;
    font-size: 1.2em;
    font-weight: 500;
    color: rgb(168, 168, 168);
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  /deep/ h3 {
    margin-top: 16px;
    color: gray;
    font-size: 22px;
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  /deep/ p {
    font-size: 1.2em;
    line-height: 1.8;
    margin-left: 0;
    margin-right: 0;
    padding: 8px 0 24px;
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  /deep/ ul {
    padding-left: 24px;
    margin-top: 8px;
    margin-bottom: 32px;
    list-style-type: circle;
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }

    li {
      line-height: 2;
      padding-left: 8px;
    }
  }

  .intro {
    /deep/  p {
      font-size: 1.6em;
      line-height: 1.5;
    }
  }
}
</style>


<script>
export default {
  name: "Home",
  data() {
    return {
      project: null
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID("project", uid).then(document => {
        this.project = document;
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
