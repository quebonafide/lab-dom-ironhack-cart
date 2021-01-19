// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const priceSelector = product.querySelector('.price span');
  const quantitySelector = product.querySelector('.quantity input[value]');
  const subtotalSelector = product.querySelector('.subtotal span');
  const price = priceSelector.innerText;
  const quantity = quantitySelector.value;
  const subtotal = price * quantity;
  subtotalSelector.textContent = subtotal;
  return subtotal;
  //... your code goes here
}

function calculateAll() {
 singleProduct = document.querySelectorAll('.product');
 let total = 0;
 for (element of singleProduct) {
  total += updateSubtotal(element);
 }
totalAmount = document.querySelector('#total-value span');
totalAmount.textContent = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove();
  console.log('The target in remove is:', target);
  calculateAll();

  //... your code goes here
}

// ITERATION 5

function createProduct() {
  const nameInput = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]').innerText;
  const priceInput = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value;
  //... your code goes here
  const templet = document.getElementById('hidden-template')
  console.log(nameInput);
  console.log(priceInput);
  const product = document.querySelector('.product');
  const clone = product.cloneNode(true);
  document.getElementById('tbody').appendChild(clone);
}
const template = document.getElementById('hidden-template')
console.log(template);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  
   const removeElement = document.getElementsByClassName("btn btn-remove");
  for(i = 0; i < removeElement.length; i++) {
    removeElement[i].addEventListener('click', removeProduct);
  }
  const addElement = document.getElementById('create');
  addElement.addEventListener('click', createProduct);

});
