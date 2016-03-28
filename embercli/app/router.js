import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('new');

    this.route('edit', { path: ':post_id/edit' });

    this.route('show', { path: ':post_id' });

    // this.route('show', { path: ':post_id' }, function() {
    //   this.route('comment.new', { path: 'comment/new' });
    //   this.route('comment.edit', { path: 'comment/edit' });
    // });


     // this.route('comment.new', { path: ':post_id/comment/new' });

     // this.route('comment.edit', { path: ':post_id/comment/edit' });

      // this.route('comment', { path: ':post_id/comment' }, function() {
      //   this.route('new');
      //   this.route('edit');
      // });
  });

  // this.route('comment', { path: 'posts/:post_id/comment' }, function() {
  //   this.route('new');
  //   this.route('edit');
  // });

  this.route('posts-comments', { path: 'posts/:post_id/posts-comments' }, function() {
    this.route('new');
    this.route('edit', { path: ':comment_id/edit' });
  });

  // this.route('posts', { path: 'posts/:post_id' }, function() {
  //   this.route('comment.new', { path: 'posts-comments/new' });
  //   this.route('comment.edit', { path: 'posts-comments/edit' });
  // });
});

export default Router;

/*
Router.map(function() {
  this.route('posts');
  this.route('post.new', { path: 'posts/new' });
  //this.resource('post', { path: 'posts/:post_id' }, function() {
  this.route('post', { path: 'posts/:post_id' }, function() {
    this.route('comment.new', { path: 'comments/new' });
  });
});
*/