Package.describe({
  summary: "Telescope Momentum theme",
  version: '0.1.0',
  name: "telescope-theme-momo"
});

Package.onUse(function (api) {

  api.use(['telescope-theme-base'], ['client']);

  api.add_files([
    'lib/client/stylesheets/screen.css',
    ], ['client']);

});