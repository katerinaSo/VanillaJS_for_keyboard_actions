window.onload = function () {
    var main = docId('main'),
        txt = docId('txt1');

    main.addEventListener('keydown', saveStatus, false);

    function saveStatus(e) {
        if (!e) {
            e = window.event
        };
        var shft = e.shiftKey,
            ctrl = e.ctrlKey,
            letter = String.fromCharCode(e.keyCode);
        if (ctrl && shft && letter == "S") {
            txt.innerHTML = ' saved all'
        } else if (ctrl && letter == "A") {
            txt.innerHTML = ' selected all'
        } else if (ctrl && letter == "S") {
            txt.innerHTML = ' saved'
        } else {
            txt.innerHTML = ' do not forget to save changes'
        }

    };


    function docId(id) {
        return document.getElementById(id)
    };

}