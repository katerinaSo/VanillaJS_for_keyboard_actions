/*Я сделала немного больше изменений чем просилось в задании. 
Не нашла как бы мне убрать повторения в коде. нажатия должны быть на английском. */


window.onload = function () {
    var main = docId('main');
    main.addEventListener('keypress', colorChange, false);


    function docId(id) {
        return document.getElementById(id)
    };


    function colorChange(e) {
        var coloredTxt1 = document.getElementById('txt1'),
            coloredTxt2 = document.getElementById('txt2'),
            letter = document.getElementsByClassName('letter'),
            character = String.fromCharCode(e.charCode);
        if (character == 'g' || character == 'G') {
            coloredTxt1.style.color = 'lightgreen';
            coloredTxt2.style.color = 'lightgreen';
            letter[2].style.color = 'lightgreen';
            letter[0].style.color = 'white';
            letter[1].style.color = 'white';
            main.style.backgroundColor = ' rgba(43, 65, 4, 0.5)';
        } else if (character == 'r' || character == 'R') {
            coloredTxt1.style.color = 'red';
            coloredTxt2.style.color = 'red';
            letter[0].style.color = 'red';
            letter[2].style.color = 'white';
            letter[1].style.color = 'white';
            main.style.backgroundColor = 'rgba(65, 4, 45, 0.5)';
        } else if (character == 'b' || character == 'B') {
            coloredTxt1.style.color = 'blue';
            coloredTxt2.style.color = 'blue';
            letter[1].style.color = 'blue';
            letter[0].style.color = 'white';
            letter[2].style.color = 'white';
            main.style.backgroundColor = 'rgba(4, 5, 65, 0.37)';
        } else {
            coloredTxt1.style.color = 'black';
            coloredTxt2.style.color = 'black';
            letter[0].style.color = 'white';
            letter[1].style.color = 'white';
            letter[2].style.color = 'white';
            main.style.backgroundColor = 'rgba(255, 255, 0, 0.123)';
        };
    };
};