import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  archived: DS.attr('boolean'),

  todos: DS.hasMany('todo', {async: true})
});
