// import Ember from 'ember';
// import SaveModelMixin from 'embercli/mixins/posts-comments/save-model-mixin';

// export default Ember.Route.extend(SaveModelMixin, {
//   renderTemplate() {
//     this.render('posts-comments.edit', { into: 'application' });
//   }
// });

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
