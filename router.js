Auction.Router.map(function() {
  this.resource('publicLots', {path:'/'});
  this.resource('publicItems');
  this.resource('lots');
  this.resource('add-lot');
  this.resource('lot', {path:'lots/:lot_id'});
});
