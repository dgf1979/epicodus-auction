Auction.Router.map(function() {
  this.resource('lots', {path:'/'});
  this.resource('add-lot');
  this.resource('lot', {path:'lots/:lot_id'});
});
