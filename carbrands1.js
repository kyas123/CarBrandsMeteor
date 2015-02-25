CarBrands = new Meteor.Collection('carbrands');

if (Meteor.isClient) {
  Template.main.carbrands = function(){
    return CarBrands.find();
  }

}

if (Meteor.isServer) {

}
