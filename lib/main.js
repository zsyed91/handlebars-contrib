require.config({
  baseUrl: 'src',

  paths: {
    'jasmine': '../lib/jasmine-2.3.2/jasmine',
    'jasmine-html': '../lib/jasmine-2.3.2/jasmine-html',
    "jasmine-boot": '../lib/jasmine-2.3.2/boot'
  },

  shim: {
    'jasmine-html': {
      deps: ['jasmine']
    },
    'jasmine-boot': {
      deps: ['jasmine', 'jasmine-html']
    }
  }
});

