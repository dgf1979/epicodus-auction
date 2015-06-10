Auction.AddLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
        description: this.get('description'),
        startPrice: this.get('startPrice'),
        imageURL: this.get('imageURL')
      });

      newLot.save();
      this.transitionToRoute('lots');
    }
  }
});
