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
  const nameInput = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]').value;
  const priceInput = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]').value;
  let template = document.createElement('tr');
  template.classList.add('product');
  template.innerHTML = 
  `<td class="name">
      <span>${nameInput}</span>
    </td>
    <td class="price">
      $<span>${priceInput}</span>
    </td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
    template.querySelector('.btn-remove').addEventListener('click', removeProduct);
    document.getElementById('tbody').appendChild(template);
    let nameInput1 = document.querySelector('#cart > tfoot > tr > td:nth-child(1) > input[type=text]');
    let priceInput1 = document.querySelector('#cart > tfoot > tr > td:nth-child(2) > input[type=number]');
    nameInput1.value = '';
    priceInput1.value = 0;
}

// function recount () {
//   removeElement = document.getElementsByClassName("btn-remove");
//   return removeElement;
// }recount();


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here
  
  const removeElement = document.getElementsByClassName("btn-remove");

  for(i = 0; i < removeElement.length; i++) {
    console.log('ssss');
    removeElement[i].addEventListener('click', removeProduct);
  }

  const addElement = document.getElementById('create');
  addElement.addEventListener('click', createProduct);

});

