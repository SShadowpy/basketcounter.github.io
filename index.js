let counterEl1 = document.getElementById("counter1")
let counterEl2 = document.getElementById("counter2")
let counter1 = 0
let counter2 = 0

function highlightLeader() {
    if (counter1 > counter2) {
        document.getElementById("counter2").style.color = "#F94F6D"
        document.getElementById("counter1").style.color = "red"
    }
    else if (counter2 > counter1) {
        document.getElementById("counter1").style.color = "#F94F6D"
        document.getElementById("counter2").style.color = "red"
    }
    else
        document.getElementById("counter1").style.color = document.getElementById("counter2").style.color = "#F94F6D"
}

function addOne1() {
    counter1 += 1
    counterEl1.innerText = counter1
    highlightLeader()
}
 
function addTwo1() {
    counter1 += 2
    counterEl1.textContent = counter1
    highlightLeader()
}

function addThree1() {
    counter1 += 3
    counterEl1.textContent = counter1
    highlightLeader()
}

function addOne2() {
    counter2 += 1
    counterEl2.innerText = counter2
    highlightLeader()
}

function addTwo2() {
    counter2 += 2
    counterEl2.textContent = counter2
    highlightLeader()
}

function addThree2() {
    counter2 += 3
    counterEl2.textContent = counter2
    highlightLeader()
}

function reset() {
    counter1 = counter2 = 0
    counterEl1.textContent = counterEl2.textContent = 0
    document.getElementById("counter1").style.color = "#F94F6D"
    document.getElementById("counter2").style.color = "#F94F6D"
}

