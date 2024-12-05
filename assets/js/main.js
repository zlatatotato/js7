'use strict';

btn__one.onclick = function() {
    btn__one.style.display = 'None';
}

btn__two.onclick = function() {
    text1.style.display = 'None';
}

let flag = true;

btn__three.onclick = function() {
    if (flag) {
        text2.style.display = 'none';
        flag = false;
    }

    else {
        flag = true;
        text2.style.display = 'block';
    }
}