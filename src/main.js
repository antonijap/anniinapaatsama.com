import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import App from './App.vue'
import router from './router'

import VueScrollReveal from 'vue-scroll-reveal';

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  scale: 0.95,
  delay: 250
});

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver: linkResolver,
  htmlSerializer: htmlSerializer
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
