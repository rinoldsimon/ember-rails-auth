import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteComment: function(comment) {
      comment.deleteRecord();
      comment.save();
    }
  }
});
