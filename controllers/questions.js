QaBoard.QuestionsController = Ember.ArrayController.extend({
  actions: {
    create: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description'),
        answers: []
      });
      newQuestion.save();
      this.set('question', '');
      this.set('author', '');
      this.set('description', '');
    }
  }
});
