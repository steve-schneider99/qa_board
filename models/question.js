QaBoard.Question = DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  answers: DS.attr()
});
