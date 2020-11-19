var checkAllBtn = document.getElementById('checAll');
var unCheckAllBtn = document.getElementById('unCheckAll');

function checkFnc(e) {
    var check = e.checked;
    var line = e.parentNode.parentNode;
    if (check) {
        if (!hasClass(line, 'check')) {
            addClass(line, 'check');
        }    
    }
    else {
        if (hasClass(line, 'check')) {
            removeClass(line, 'check');
        }
    }
    
}

function clickFnc(e) {
    var input = e.previousElementSibling.firstElementChild;
    var check = input.checked;
    var line = e.parentNode;

    if (check) {
        input.checked = '';
        if (hasClass(line, 'check')) {
            removeClass(line, 'check');
        }

    }
    else {
        input.checked = 'true';
        if (!hasClass(line, 'check')) {
            addClass(line, 'check');
        }
    }
}

checkAllBtn.addEventListener('click', function() {
    var input = document.frm.check;
    for (var i = 0; i < input.length; i++) {
        input[i].checked = 'true';
    }

    var lines = document.getElementsByTagName('tr');

    for (var i = 0; i < lines.length; i++) {
        if (!hasClass(lines[i], 'check')) {
            addClass(lines[i], 'check');
        }
    }
});

unCheckAll.addEventListener('click', function() {
    var input = document.frm.check;
    for (var i = 0; i < input.length; i++) {
        input[i].checked = '';
    }

    var lines = document.getElementsByTagName('tr');

    for (var i = 0; i < lines.length; i++) {
        if (hasClass(lines[i], 'check')) {
            removeClass(lines[i], 'check');
        }
    }
});

//function xoa class classNameStr khoi element
function removeClass(element, classNameStr) {
    element.className = element.className.replace(' ' + classNameStr, '');;
}

//function them class classNameStr vao element
function addClass(element, classNameStr) {
    element.className = element.className + ' ' + classNameStr;
}

//return true/false
function hasClass(element, classNameStr) {
    return element.className.includes(classNameStr);
}


//str = Zent coding shool
//str.includes('Zent');
















