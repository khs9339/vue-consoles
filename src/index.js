const defaultOpt = {
  currentEnv: 'local',
  prefix: ['_ENV_'],
  console: ['log', 'info', 'debug', 'warn', 'error'],
  buildEnv: {
    local: true,
  },
};

export default {
  install(Vue, options) {
    const opt = Object.assign(defaultOpt, options)
    try {
      if (!console) throw new Error('Not Found Window Console');
      if (!opt.buildEnv[opt.currentEnv]) throw new Error('This Environment is not available');
      const prefix = chgPreFix(opt);
      const logs = opt.buildEnv[opt.currentEnv] === true ? opt.console : opt.buildEnv[opt.currentEnv];
      opt.console.forEach((key) => {
        Object.defineProperty(Vue.prototype, `$${key}`, {
          enumerable: false,
          configurable: false,
          get () {
            return logs.includes(key) ? console[key].bind(this, ...prefix, '::', key.toUpperCase(), '::') : (msg) => {};
          }
        })
      })
    } catch (err) {
      opt.console.forEach(key => {
        Vue.prototype[`$${key}`] = (msg = '') => {};
      })
    }
  }
}


function chgPreFix ({ prefix, currentEnv }) {
  return (prefix || []).map(txt => {
    switch (txt) {
      case '_ENV_': txt = currentEnv.toUpperCase(); break;
      case '_TIME_': txt = new Date().toJSON(); break;
    }
    return txt
  })
}
