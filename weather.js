if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('number',0);

 

  Template.temperature.helpers({
    number: function () {
      return Session.get('number');
    }
  });


  Template.temperature.events({
    'click button': function(){ 
      //increments temp by 5 
      Session.set('number', Session.get('number')+5);

    }
     
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
