import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('lists', { path: '/' }, function() {
    this.route('show', { path: 'lists/:list_id' }, function() {
      this.resource('todos', function() {});
    });
  });
});
