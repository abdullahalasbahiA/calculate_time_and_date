const timeContainer = document.getElementById("timeContainer");

setInterval(function() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    timeContainer.innerHTML = n;
}, 1000)

