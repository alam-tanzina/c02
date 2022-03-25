
var price = 5, quantity = 14;
var total = price * quantity

//write total into the element with id of cost
var el = document.getElementById('cost');
el.textContent = '$' + total;