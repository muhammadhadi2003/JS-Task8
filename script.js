// Task 2)
function alertmsg(){
    alert("Thanks for purchasing a phone from us")
}

// Task 3)

function deleteRow(btn) {
    btn.closest('tr').remove();
}

// Task 5)
var counterValue = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counterValue;
}

function increaseCounter() {
    counterValue++;
    updateCounter();
}

function decreaseCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCounter();
    }
}
