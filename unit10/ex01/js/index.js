function openTab(e) {
    //Lay tat ca element cua menu
    var menus = document.getElementsByClassName('menu');
    //for menus, replace class name
    for (var i = 0; i < menus.length; i++) {
        removeClass(menus[i], 'menu-active');
    }
    addClass(e, 'menu-active');

    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        removeClass(contents[i], 'active');
    }
    addClass(e.nextElementSibling, 'active');
}

function removeClass(e, className) {
    e.className = e.className.replace(' ' + className, '');
}

function addClass(e, className) {
    e.className = e.className + ' ' + className;
}














