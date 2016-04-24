import Ember from 'ember';
export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    save(){
      let user = this.get('user');
      user.save().catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      }).then(()=>{this.get('session').authenticate('authenticator:devise', user.get('email'), user.get('password')).catch((reason) => {
          this.set('errorMessage', reason.error || reason);
        });
      });
    }
  }
});
