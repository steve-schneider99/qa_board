QaBoard.QuestionsRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render('questions')
  },
  model: function() {
    return this.store.find('question');
  }
});
