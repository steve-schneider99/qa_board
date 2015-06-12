QaBoard.Answer = DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  answers: DS.attr()
});
