<template>
  <div class="wrapper">
    <prismic-rich-text v-if="project" :field="project.data.title" />
    <prismic-rich-text v-if="project" :field="project.data.description" />
    <prismic-rich-text v-if="project" :field="project.data.case" />
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

  &:first-child img {
    margin-bottom: $space-x-large;
  }

  /deep/ h1 {
    font-size: 42px;
    text-align: center;
    margin-left: $space-x-medium;
    margin-right: $space-x-medium;

    @include md {
      margin-left: $space-x-medium * 4;
      margin-right: $space-x-medium * 4;
    }
  }

  /deep/ h2 {
    text-align: center;
    margin-bottom: 64px;
    font-size: 22px;
    font-weight: 400;
    color: gray;
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
    font-size: 16px;
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
