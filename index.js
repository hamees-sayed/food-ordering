import { menuArray } from './data.js'

document.addEventListener('click', (e) => {
    if (e.target.id) {
        handleAddToCart(e.target.id)
    }
    else if (e.target.classList.contains('button')) {
        completeOrder(e.target.classList.contains('button'))
    }
    else if (e.target.classList.contains('submit-btn')) {
        orderComplete(e.target.classList.contains('submit-btn'))
    }
})

function handleAddToCart(addId) {

    const item = menuArray.filter((foodItem) => {
        return foodItem.id == addId
    })[0]

    let orderCart = ``

    orderCart += `
    <div class="order-item">
        <div class="content">
            <p class="cart">${item.name}</p>
            <p class="remove">remove</p>
        </div>
        <p>${item.price}</p>
    </div>`

    document.getElementById('order').classList.remove('hidden')
    document.querySelector('.order-content').innerHTML += orderCart
}

function completeOrder(button) {
    let form = ``

    form += `
    <div class="form">
<h1>Enter card details</h1>
  <form id="order-form">
  <input type="text" name="fullName" placeholder="Enter your name" required>
  <input type="number" name="cardNumber" placeholder="Enter card number" minlength="12" required>
  <input type="number" name="cvv" placeholder="Enter cvv" minlength="3" required>
  <button class="submit-btn" type="submit" form="order-form">Pay</button>
</form>
</div>`

    document.querySelector('.form-modal').innerHTML += form
}

function orderComplete(pay) {

    // const modalText = document.querySelector('section.checkout')

    let thankyouMsg = ``

    thankyouMsg += `
    <div class="thankyou-msg">
  Thanks, James! Your order is on its way!
</div>`

    document.querySelector('section.checkout').innerHTML += thankyouMsg

}

function showMenu() {

    let menuHTML = ``

    menuArray.forEach(function (item) {
        menuHTML += `
        <div class="item">
            <div class="txt">
               <p class="img">${item.emoji}</p>
               <div>
                  <p class="food">${item.name}</p>
                  <p class="ingredient">${item.ingredients}</p>
                  <p class="cost">$${item.price}</p>
               </div>
            </div>
            <div class="btn" id=${item.id}>+</div>
            <div class="line"></div>
        </div>`
    })
    return menuHTML
}

function render() {
    document.querySelector('.menu').innerHTML = showMenu()
}

render()