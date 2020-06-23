<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message:'Please Check out the developer tool console.'
    };
  },
  created() {
    this.$log('TEST VUE-CONSOLES LOG', 'LOG')
    this.$info('TEST VUE-CONSOLES LOG', 'INFO')
    this.$warn('TEST VUE-CONSOLES LOG', 'WARN')
    this.$error('TEST VUE-CONSOLES LOG', 'ERROR')
    this.$debug('TEST VUE-CONSOLES LOG', 'DEBUG')
  }
};
</script>