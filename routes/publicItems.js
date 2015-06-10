Auction.PublicItemsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('item');
  }
});
