import Ember from 'ember';
import SaveModelMixin from 'embercli/mixins/posts/save-model-mixin';

export default Ember.Route.extend(SaveModelMixin, {
  model: function() {
    return this.store.createRecord('post');
  }
});
