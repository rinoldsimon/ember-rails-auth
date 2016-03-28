import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('posts-comments.edit', { into: 'application' });
  },
  actions: {
    cancel: function() {
      this.transitionTo('posts.show', this.modelFor('posts-comments'));
    }
  }
});
