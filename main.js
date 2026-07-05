document.getElementById("orderForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const foodSelect = document.getElementById("food");
    const food = foodSelect.value;

    const price = foodSelect.options[foodSelect.selectedIndex].dataset.price;

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const address = document.getElementById("address").value;
    const comments = document.getElementById("comments").value;

    const businessNumber = "2348137846411"; // Replace with your WhatsApp number

    const message =
`*🍛 NEW FOOD ORDER*

*Customer:* ${name}

*Customer WhatsApp:* ${phone}

*Food Ordered:*
${food}

*Price:* ₦${Number(price).toLocaleString()}

*Delivery Date:* ${date}

*Delivery Time:* ${time}

*Delivery Address:*
${address}

*Additional Comments:*
${comments}`;

    const whatsappURL =
`https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});