import Vue from 'vue';
import App from './App.vue';
import plugin from 'vue-plugin'

Vue.use(plugin, {
  currentEnv: 'local',
  prefix: ['VUE-CONSOLES', '_ENV_'],
  console: ['log', 'warn', 'error'],
  buildEnv: {
    local: true,
    dev: true,
    tst: true,
    pre: ['error'],
    production: ['error']
  },
}) 

new Vue({
  el: '#app',
  render: h => h(App)
});