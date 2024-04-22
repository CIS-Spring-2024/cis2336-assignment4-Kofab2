const quantityInputs = document.querySelectorAll('.item-quantity');
// Select the element to display the total cost
const totalCostDisplay = document.getElementById('total-cost');

// Function to calculate and display total cost
function calculateTotalCost() {
    let totalCost = 0;

    // Iterate over each item quantity input
    quantityInputs.forEach(input => {
        // Get the price of the item associated with the input
        const priceElement = input.previousElementSibling;
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        // Calculate the subtotal for the item
        const subtotal = price * input.value;
        // Add the subtotal to the total cost
        totalCost += subtotal;
    });
    // Display the total cost with 2 decimal places
    totalCostDisplay.textContent = '$' + totalCost.toFixed(2);
}
quantityInputs.forEach(input => {
    input.addEventListener('change', calculateTotalCost);
});

// Initial calculation of total cost
calculateTotalCost();
if(input.value > 10){
    input.value = 10;
}
if(input.value < 0){
    input.value = 0
    alert('Orders can not be negative');
}
function numonly(input){
    var regex = /[^0-9]/g;
    input.value = input.value.replace(regex, "");
}
