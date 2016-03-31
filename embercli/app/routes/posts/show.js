import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteComment: function(comment) {
      if(confirm('Are you sure?')) {
      	//comment.destroyRecord();
      	comment.deleteRecord();
        comment.save();
      }
    }
  }
});