Auction.ItemController = Ember.ObjectController.extend({
  needs: ['item'],
  actions: {
    updateItem: function() {
      var item = this.get('controllers.item.model');
      item.save();
    },
    deleteItem: function() {
      var itemModel = this.get('model');
      var lotID = itemModel.get('lot.id');
      alert(itemModel.lot.id);
      itemModel.destroyRecord();
      this.transitionToRoute('lot', lotID);
    }
  }
});
