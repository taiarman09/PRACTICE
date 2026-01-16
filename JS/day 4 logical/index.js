let amount = document.getElementById("amount");
let add = document.getElementById("add");
let send = document.getElementById("send");

let userAmount = document.getElementById("userAmount");
let sendAmount = document.getElementById("sendAmount");

// get saved balance or default
let count = localStorage.getItem("balance")
    ? Number(localStorage.getItem("balance"))
    : 500;

// show balance
function toggltmenu() {
    amount.innerHTML = count;
}

// add money
function toggleadd() {
    let value = Number(userAmount.value);

    if (value > 0) {
        count += value;
        localStorage.setItem("balance", count);

        add.innerHTML = `${value} ₹ added`;
        amount.innerHTML = count;
        userAmount.value = "";
    } else {
        add.innerHTML = "Enter valid amount";
    }
}

// send / minus money
function togglesend() {
    let value = Number(sendAmount.value);

    if (value > 0 && value <= count) {
        count -= value;
        localStorage.setItem("balance", count);

        send.innerHTML = `${value} ₹ sent`;
        amount.innerHTML = count;
        sendAmount.value = "";
    } else if (value > count) {
        send.innerHTML = "Insufficient balance";
    } else {
        send.innerHTML = "Enter valid amount";
    }
}
