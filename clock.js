const hours = document.getElementById('horas');
const minutes = document.getElementById('minutos');

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
}

setInterval (() => {
    clock()
}, 1000);