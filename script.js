const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')


function showAll(productArray){
   let myli = ''

    productArray.forEach((product) => {
        myli +=  `
    
    <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
    `
    
    })

    list.innerHTML = myli

    
}

function mapAllItems(params) {
    
    const newPrices = menuOptions.map((product) =>({ // product é a variavel que vai guardar as informações da variavel menuOption
      ...product, // Spread Operator
      price: product.price * 0.9,
      
    
    }))


    showAll(newPrices)
    console.log(newPrices)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems )




