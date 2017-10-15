var init = (function () {
    var ageDom, inputsDom, aliveDom, timeFlies, miliDom, inputsHourDom, errorDom;
    var dayInput, monthInput, yearInput, hourInput, minInput;
    
    /** Inputs **/


    dayInput = document.getElementById('day--input');
    monthInput = document.getElementById('month--input');
    yearInput = document.getElementById('year--input');

    hourInput = document.getElementById('hour--input');
    minInput = document.getElementById('min--input');
    
    /** Dom Elements **/

    inputsDom = document.querySelector('.input-container');
    inputsHourDom = document.querySelector('.input-hour');
    ageDom = document.getElementById('age');
    aliveDom = document.querySelector('.alive');
    miliDom = document.querySelector('.mili');
    timeFlies = document.querySelector('.time');
    errorDom = document.querySelector('.error');
    go = document.getElementById('go');
    restart = document.getElementById('restart');
    
    var getInputs = function () {
    
    var day, month, year, hour, mins;
        return {
            mins: parseFloat(minInput.value),
            hour: parseFloat(hourInput.value),
            day: parseFloat(dayInput.value),
            month: parseFloat(monthInput.value),
            year: parseFloat(yearInput.value)
        };
    };
    
    var hider = function(dom) {
        dom.classList.toggle('hide');
    };

    go.addEventListener('click', function(el) {
        var inputs = getInputs();
        theThing(inputs);
    });
    
    restart.addEventListener('click', function(el) {
        var inputs = getInputs();
        reset(inputs);
    });
    
    var reset = function (inputs) {
        location.reload();
    };
    
    
    var theThing = function (inputs) {
        if (inputs.day > 0 && inputs.day <= 31 && inputs.month > 0 && inputs.month <= 12 && inputs.year > 0 && inputs.year < 2018 && inputs.hour > 0 && inputs.hour <= 24 && inputs.mins > 0 && inputs.mins <= 60) {
            hider(ageDom);
            hider(aliveDom);
            hider(miliDom);
            hider(inputsHourDom);
            hider(inputsDom);
            hider(restart);
            hider(go);
            if (errorDom.classList !== 'hide') {
                errorDom.classList.add('hide');
            };
        (function loop () {
            var now = new Date();
            var birth = new Date(inputs.year, inputs.month-1, inputs.day, inputs.hour, inputs.mins, 00);
            var age = now - birth;
            var ageString = age.toString();
            var integer = ageString.substring(0, ageString.length-3);
            var decimal = ageString.substring(ageString.length-3, ageString.length);
            ageDom.innerHTML = integer + ',' + decimal;
            setTimeout(loop, 1)
        })();
        } else {
            errorDom.classList.remove('hide');
        };
    };
    
    
})();