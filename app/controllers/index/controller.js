// index controller file

mainApp.controller('IndexController', IndexController);
IndexController.$inject = ['$rootScope', 'GuestBookService'];

function IndexController($rootScope, GuestBookService){
    var vm = this;

    vm.datas = GuestBookService.datas();
    vm.guestBookForm = guestBookForm;


    function guestBookForm(guest){
        let date = new Date();
        guest.date = date.toLocaleDateString()+' '+date.toLocaleTimeString();
        let newDate = Object.assign({}, guest);
        vm.datas.push(newDate);
        
        vm.guest = {};

    }

}