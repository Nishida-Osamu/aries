import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Amplify, * as AmplifyModules from 'aws-amplify' // �ǋL
import { AmplifyPlugin } from 'aws-amplify-vue' // �ǋL
import aws_exports from './aws-exports' // �ǋL
Amplify.configure(aws_exports) // �ǋL

Vue.use(AmplifyPlugin, AmplifyModules) // �ǋL

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')