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

app.get('/top', function *(next) {
  var html = yield render('src/top.jade');
  this.status = 200;
  this.body = html;
});

app.get('/co-ltd', function *(next) {
  var html = yield render('src/co-ltd.jade');
  this.status = 200;
  this.body = html;
});

app.get('/about', function *(next) {
  var html = yield render('src/about.jade');
  this.status = 200;
  this.body = html;
});

app.get('/people', function *(next) {
  var html = yield render('src/people.jade');
  this.status = 200;
  this.body = html;
});

app.get('/', function *(next) {
  var html = yield render('src/index.jade');
  this.status = 200;
  this.body = html;
});

console.log('Hey sailor, Your server is on at port: 3333');
app.listen(3333);
