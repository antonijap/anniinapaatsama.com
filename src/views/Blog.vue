<template>
  <div class="wrapper">
    <a href="/">
      <font-awesome-icon icon="long-arrow-alt-left"/>
      <span>Portfolio</span>
    </a>
    <prismic-rich-text v-if="blog" :field="blog.data.intro"/>
    <div class="posts">
      <div class="post" v-for="(post, index) in posts" :key="index">
        <a :href="`/blog/${post.uid}`">
          <img v-if="post.data.image" :src="post.data.image.url">
          <h2>{{ $prismic.richTextAsPlain(post.data.title) }}</h2>
          <prismic-rich-text v-if="blog" :field="post.data.intro"/>
        </a>
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
    width: 60%;
  }

  a > svg {
    margin-right: 8px;
  }

  /deep/ h1 {
    font-size: 22px;
    margin-bottom: $space-base;
  }

  /deep/ h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: $space-base;
  }

  /deep/ p {
    font-size: 14px;
  }

  img {
    margin-bottom: $space-medium;
  }

  .posts {
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

    .post {
      position: relative;
      span {
        position: absolute;
        bottom: $space-base;
        left: $space-base;
      }
    }
  }
}
</style>


<script>
export default {
  name: "Blog",
  data() {
    return {
      blog: null,
      posts: []
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client
        .query(this.$prismic.Predicates.any("document.type", ["post", "blog"]))
        .then(response => {
          this.home = response.results;
          response.results.map(item => {
            if (item.type === "post") {
              this.posts.push(item);
            } else if (item.type === "blog") {
              this.blog = item;
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
