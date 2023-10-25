document.addEventListener("DOMContentLoaded", function() {
    const billForm = document.getElementById("billForm");
    const itemList = document.getElementById("itemList");
    const totalAmount = document.getElementById("totalAmount");

    let items = [];
    let total = 0.00;

    billForm.addEventListener("submit", function(e) {
        e.preventDefault();
    });

    const calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", function() {
        const itemName = document.getElementById("item").value;
        const itemPrice = parseFloat(document.getElementById("price").value);
        const itemQuantity = parseInt(document.getElementById("quantity").value);

        if (!itemName || isNaN(itemPrice) || isNaN(itemQuantity)) {
            alert("Please fill in all fields with valid values.");
            return;
        }

        const itemTotal = (itemPrice * itemQuantity).toFixed(2);
        total += itemTotal;

        items.push({ name: itemName, price: itemPrice, quantity: itemQuantity });

        const listItem = document.createElement("li");
        listItem.textContent = `total amount - rs${itemTotal}`;
        itemList.appendChild(listItem);

        totalAmount.textContent = total.toFixed(2);

        // Clear input fields
        document.getElementById("item").value = "";
        document.getElementById("price").value = "";
        document.getElementById("quantity").value = "";
    });
});
