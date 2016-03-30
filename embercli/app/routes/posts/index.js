import Ember from 'ember';

export default Ember.Route.extend({
  //model: function() {
    //return this.store.findAll('comment');
    //return this.store.findAll('post');
    //return this.get('store').findAll('post');
  //},
  model: function() {
    return this.store.findAll('post', {id: true});
  },
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    },
    save: function() {
      var route = this;
      this.currentModel.save().then(function() {
        route.transitionTo('posts');
      }, function() {
        console.log('Failed to save the model');
      });
    }
  }
});
