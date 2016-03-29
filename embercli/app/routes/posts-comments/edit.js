import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('posts-comments.edit', { into: 'application' });
  },
  actions: {
  	save: function() {
      //this.controller.get('model').save().then(() => {
      this.currentModel.save().then(() => {
        this.transitionTo('posts.show', this.modelFor('posts-comments'));
      });
    },
    cancel: function() {
      this.transitionTo('posts.show', this.modelFor('posts-comments'));
    }
  }
});
