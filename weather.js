if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('temperature',0);

 

 /* Template.temperature.helpers({
    number: function () {
      return Session.get('number');
    }
  });


  Template.temperature.events({
    'click button': function(){ 
      //increments temp by 5 
      Session.set('number', Session.get('number')+5);

    }
  }); */

  Template.temperature.helpers({
    temperature: function () {
      return Session.get('temperature');
    }
  });

  Template.temperature.events({
    'click button': function(){
      console.log(document.getElementById('input'));
         Session.set('temperature', document.getElementById('input'));

       }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
