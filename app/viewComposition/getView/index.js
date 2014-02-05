define(['knockout'], function(ko) {

  var catalog = [
      {id:11, name:'Item 11'},
      {id:22, name:'Item 22'},
      {id:33, name:'Item 33'},
      {id:44, name:'Item 44'}
    ];
  return {
    activeItem: ko.observable(),
    getItem: function(id){
      return ko.utils.arrayFirst(catalog, function(i){return i.id==id;});
    },
    activate: function(itemId){
      console.log('In activate()', itemId);
      this.activeItem(this.getItem(itemId));
    },
    canActivate: function(itemId){
      console.log('In canActivate()', itemId);
      return !!this.getItem(itemId);
    },
    deactivate: function(){
      console.log('In deactivate()');
    },
    canDeactivate: function(itemId){
      console.log('In canDeactivate()', itemId);
      return true;
    },
  };


});
