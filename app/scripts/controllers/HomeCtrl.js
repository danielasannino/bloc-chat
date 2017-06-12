(function() {
    function HomeCtrl(Room) { 
        this.rooms = Room.all;
        debugger;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();