const hours = document.getElementById('horas');
const minutes = document.getElementById('minutos');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

function clock () {
    let data = new Date();

    if (data.getHours() < '10'){
        hours.innerHTML = '0' + data.getHours();
    } else {
        hours.innerHTML = data.getHours();
    }

    if (data.getMinutes() < '10'){
        minutes.innerHTML = ': 0' + data.getMinutes();
    } else {
        minutes.innerHTML = ': ' + data.getMinutes();
    }
    date()
}

function date () {
    let date = new Date();

    day.innerHTML = date.getDate() ;
    month.innerHTML = '/0' + (date.getMonth() +1);
    year.innerHTML = '/' + date.getFullYear();
}

setInterval (() => {
    clock()
}, 1000);
