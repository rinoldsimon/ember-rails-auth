import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
