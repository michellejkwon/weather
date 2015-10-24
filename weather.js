if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('temperature',0);

 /*Template.temperature.helpers({
    temperature: function () {
      return Session.get('number');
    }
  });


  Template.temperature.events({
    'click button': function(){ 
      //increments temp by 5 
      Session.set('number', Session.get('number') + 5);

    }
  }); */

  Template.temperature.helpers({
    temperature: function () {
      return Session.get('temperature');
    }
  });

  Template.temperature.events({
        'click button': function() {
        console.log(document.getElementById('input').value);
        Session.set('temperature', document.getElementById('input').value);
      }
  }); 
} 

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
