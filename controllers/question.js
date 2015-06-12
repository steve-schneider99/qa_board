QaBoard.QuestionController = Ember.ObjectController.extend({
  questionEditing: false,
  actions: {
    editQuestion: function() {
      this.set('questionEditing', true);
    },
    saveQuestion: function() {
      this.set('questionEditing', false);
    },
    deleteQuestion: function() {
      if(confirm("Really delete this question?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
