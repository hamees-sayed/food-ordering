import { menuArray } from './data.js'

const menu = document.getElementsByClassName('menu')

function showMenu(menuArray) {

    

    menu.innerHTML += `
    <div class="item">
    <div class="txt">
       <p class="img">🍕</p>
       <div>
          <p class="food">Pizza</p>
          <p class="ingredient">pepperoni,mushroom,pizza</p>
          <p class="cost">$14</p>
       </div>
    </div>
    <div class="btn">+</div>
    <div class="line"></div>
 </div>
    `
}