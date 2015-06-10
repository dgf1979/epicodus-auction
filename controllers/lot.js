Auction.LotController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    saveItem: function() {
      var newItem = this.store.createRecord('item', {
        title: this.get('itemTitle'),
        description: this.get('itemDescription'),
        imageURL: this.get('itemImageURL')
      });
      newItem.save();

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(newItem);
      lot.save();
    },
    delete: function() {
      if(confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('lots');
      };
    }
  }
});
