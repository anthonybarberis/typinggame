window.onload = init;

function init() {
    document.getElementById('coords').addEventListener('mouseover', function(event) {
        this.innerHTML = event.clientX
    })
}