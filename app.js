var serve = require('koa-static');
var koa = require('koa');
var mount = require('koa-mount');
var app = koa();
var fs = require('co-fs');
var views = require('co-views');
var render = views('.', {default: 'jade'});
var router = require('koa-router');
// var liveload = require('koa-liveload');
// var session = require('koa-session');

app.use(router(app));
app.use(mount('/assets', serve(__dirname + '/assets')));

app.get('/', function *(next) {
  var html = yield render('src/index.jade');
  this.status = 200;
  this.body = html;
});

app.get('/page-showcase', function *(next) {
  var html = yield render('src/page-showcase.jade');
  this.status = 200;
  this.body = html;
});

app.get('/page-books', function *(next) {
  var html = yield render('src/page-books.jade');
  this.status = 200;
  this.body = html;
});

app.get('/page-single-book-detail', function *(next) {
  var html = yield render('src/page-single-book-detail.jade');
  this.status = 200;
  this.body = html;
});

// app.get('/pages/product', function *(next) {
//   var html = yield render('src/pages/product.jade');
//   this.status = 200;
//   this.body = html;
// });

console.log('Hey sailor, Your server is on at port: 3333');
app.listen(3333);
