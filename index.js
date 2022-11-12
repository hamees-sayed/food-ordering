import { menuArray } from './data.js'

document.addEventListener('click', (e) => {
    if (e.target.id) {
        handleAddToCart(e.target.id)
    }
})

function handleAddToCart(addId) {
    console.log(addId)

    const item = menuArray.filter((foodItem) => {
        return foodItem.id == addId 
    })[0]

    console.log(item)

    let orderCart = ``

    orderCart = `
    <div class="content">
        <p class="cart">${item.name}</p>
        <p class="remove">remove</p>
    </div>
    <p>${item.price}</p>`

    document.querySelector('.order-item').innerHTML += orderCart
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