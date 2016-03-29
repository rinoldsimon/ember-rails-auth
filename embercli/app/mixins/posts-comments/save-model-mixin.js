// import Ember from 'ember';

// export default Ember.Mixin.create({
//   actions: {
//     save: function() {
//       var route = this;
//       this.currentModel.save().then(function() {
//         route.transitionTo('posts.show', route.modelFor('posts-comments'));
//       }, function() {
//         console.log('Failed to save the model');
//       });
//     },
//     cancel: function() {
//       this.transitionTo('posts.show', this.modelFor('posts-comments'));
//     }
//   },
//   deactivate: function() {
//     if (this.currentModel.get('isNew')) {
//       this.currentModel.deleteRecord();
//     } else {
//       this.currentModel.rollbackAttributes();
//     }
//   }
// });
