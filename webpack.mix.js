let mix = require('laravel-mix')

require('./nova.mix')
const path = require('path');

mix
  .setPublicPath('dist')
  .webpackConfig({
      resolve: {
          alias: {
              '@': path.resolve(__dirname, '../../vendor/laravel/nova/resources/js/')
          }
      }
  })
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .css('resources/css/field.css', 'css')
  .nova('mp/id-copy')
