Auction.Lot = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  startPrice: DS.attr(),
  imageURL: DS.attr(),
  items: DS.hasMany('item', {async: true})
});
