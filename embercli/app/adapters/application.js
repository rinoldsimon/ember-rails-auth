//import DS from 'ember-data';
// import ActiveModelAdapter from 'active-model-adapter';
// export default ActiveModelAdapter.extend({
// 	host: 'http://localhost:3000'
// });

import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:3000',
  authorizer: 'authorizer:devise'
});
