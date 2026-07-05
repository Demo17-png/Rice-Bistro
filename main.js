
document.getElementById("orderForm").addEventListener("submit", function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let food=document.getElementById("food").value;
let price = localStorage.getItem("selectedPrice") || "";
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let address=document.getElementById("address").value;
let comments=document.getElementById("comments").value;


let message=
`*NEW FOOD ORDER*%0A%0A`+
`👤 *Full Name:* ${name}%0A`+
`📱 *WhatsApp Number:* ${phone}%0A`+
`🍛 *Food Ordered:* ${food}%0A`+
`💰 *Price:* ${price}%0A`+
`⏰ *Delivery Date:* ${date}%0A`+
`⏰ *Delivery Time:* ${time}%0A`+
` *Delivery Address:* ${address}%0A`+
`📝 *Comments:* ${comments}`;

let whatsappNumber="2348137846411";

// Replace with your own WhatsApp number

let url=`https://wa.me/${whatsappNumber}?text=${message}`;

window.open(url,"_blank");

});
