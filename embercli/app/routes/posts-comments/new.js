// import Ember from 'ember';
// import SaveModelMixin from 'embercli/mixins/posts-comments/save-model-mixin';

// export default Ember.Route.extend(SaveModelMixin, {
//   model: function() {
//     return this.store.createRecord('comment');
//   }
// });


import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {};
    //return this.store.findAll('post');
  },
  // model: function(params) {
  //   return this.store.find('product', params.product_id);
  // }
  renderTemplate() {
    this.render('posts-comments.new', { into: 'application' });
  },
  actions: {
    save: function() {
      const post = this.modelFor('posts-comments');
      const newComment = this.get('store').createRecord('comment', this.currentModel);
      newComment.set('post', post);
      newComment.save().then(() => {
        this.transitionTo('posts.show', post);
      });
    },
    cancel: function() {
      this.transitionTo('posts.show', this.modelFor('posts-comments'));
    }
  }
});
