// Functions
// Declare function named calculateTax with the parameter subtotal
function calculateTax(subtotal) {
    console.log("Running calculateTax function");
    taxRate = 0.0875; // Since the tax is 8.75% of the subtotal, so 8.75/100 = 0.0875
    let taxAmount = subtotal * taxRate; // Calculating tax amount
    taxAmount = taxAmount.toFixed(2); // Round taxAmount to 2 decimal places
    console.log(taxAmount);
    return taxAmount; // return the rounded tax amount 
}

// Declaring function calculateTotal with two parameters subtotal and tax
function calculateTotal(subtotal, tax) {
    console.log("Running calculateTotal function");
    let total = parseFloat(subtotal) + parseFloat(tax) // Calculating the total
    total = total.toFixed(2); // round the total to 2 decimal places
    console.log(total); 
    return total; // return the calculated and rounded total amount
}

// Declaring function order with the parameter cost
function order(cost) {
    console.log("Running order function");
    let subtotal = document.querySelector("#subtotal").textContent;
    // Converting a string into number using parseInt
    subtotal = parseInt(subtotal);
    // Updating the subtotal by adding the corresponding product's price.
    subtotal = subtotal + cost;// Update the subtotal based on the cost parameter
    const taxAmount = calculateTax(subtotal);
    const total = calculateTotal(subtotal, taxAmount);

    document.querySelector("#subtotal").textContent = subtotal;
    document.querySelector("#tax").textContent = taxAmount;
    document.querySelector("#total").textContent = total;
}

// When user clicks on any of the three products, the order function is called
document.querySelector("#product1").onclick = function() {
    order(130); // 130 is the cost of product 1
}
document.querySelector("#product2").onclick = function() {
    order(85); // 85 is the cost of product 2
}
document.querySelector("#product3").onclick = function() {
    order(115); // 115 is the cost of product 3
}
