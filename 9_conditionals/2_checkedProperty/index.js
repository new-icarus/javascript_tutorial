document.getElementById("myButton").onclick = function () {
    const myCheckbox = document.getElementById("myCheckbox");

    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    let isSubscribed = document.getElementById("isSubscribed");
    let paymentOption = document.getElementById("paymentOption");


    if (myCheckbox.checked) {
        isSubscribed.innerHTML = "You are subscribed";
    }
    else {
        isSubscribed.innerHTML = "You are NOT subscribed";
    }

    if (visaBtn.checked) {
        paymentOption.innerHTML = "You chose Visa.";
    } else if (mastercardBtn.checked) {
        paymentOption.innerHTML = "You chose MasterCard.";
    } else if (paypalBtn.checked) {
        paymentOption.innerHTML = "You chose PayPal.";
    } else {
        paymentOption.innerHTML = "You didn't chose a payment option.";
    }
};