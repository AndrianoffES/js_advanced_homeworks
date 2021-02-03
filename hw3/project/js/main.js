const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';

// переделать в ДЗ на промисы. НЕ ИСПОЛЬЗОВАТЬ fetch!!!
/*let getRequest = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status !== 200) {
        console.log('Error');
      } else {
        cb(xhr.responseText);
      }
    }
  };
  xhr.send();
}
const getRequest = (url) =>{
  return new Promise((res, rej)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4) {
          if (xhr.status == 200){
            res(xhr.responseText)
          }
          else {
            rej(Error(xhr.statusText))
          }
        }
      xhr.send();
    }
  })
}


// ------------------------------------------------
*/
class ProductList {
  goods;
  allProducts;

  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.getProducts().then((data) => {
      this.goods = [...data];
      this.render();
    });
  }

  sum() {
    return this.goods.reduce((sum, { price }) => sum + price, 0);
  }


  getProducts() {
    return fetch(`${API}catalogData.json`)
        .then((response) => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      console.log(productObject);
      this.allProducts.push(productObject);
      block.insertAdjacentHTML('beforeend', productObject.render());
    }
  }

}

class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.product_name = product.product_name;
    this.price = product.price;
    this.id_product = product.id_product;
    this.img = img; // this.img = product.img || 'https://placehold.it/200x150';
  }

  render() {
    return `<div class="product-item" data-id_product="${this.id_product}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.product_name}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn" data-id_product="${this.id_product}">Купить</button>
              </div>
          </div>`;
  }
}
const productList = new ProductList();


class CartItem  {

  constructor(item, img='https://placehold.it/200x150') {
    this.quantity = item.quantity || 1;
    this.product_name = item.product_name;
    this.price = item.price;
    this.id_product = item.id_product;
    this.img = item.img;

  }


  renderCartItem() {
    return `<div class="cart-item">
						<img src="${this.img}" alt="товар">		
					<div class="desc">
						<h3>${this.product_name}</h3>
						<p>${this.quantity} x ${this.price} руб</p>
						<button class="remove" data-id_product=${this.id_product}>Удалить</button>
						
					</div>
				</div>`
  }
}


class Cart extends ProductList{
constructor(container='.cart') {
  super();
  this.result = {quant:0, cost: 0}

}

  addItem(id_product, productList) {
    // Добавить товар в корзину по id
    console.log('id tut')
    let targetElement = productList.allProducts.filter( el => el.id_product === id_product)[0];
    let flag = false;

    // проверка есть ли уже такой товар
    this.allProducts.forEach(el => {
      if (el.id_product === id_product) {
        el.quantity++;
        flag = true;
      }
    });

    // если нет - добавляем новый объект
    if (!flag) {
      let config = {
        id_product: targetElement.id_product,
        product_name: targetElement.product_name,
        img: targetElement.img,
        price: targetElement.price
      }
      let cartItem = new CartItem(config);
      this.allProducts.push(cartItem);

    }

    this.render();
  }
  removeItem(id) {

    this.allProducts.forEach(el => {
      if (el.id_product === id) {
        el.quantity--;
      }
    });
    this.render();
  }
  render (){
  let cartBlock = document.querySelector('.cart');
  cartBlock.innerHTML ='';
    for (let item of this.allProducts) {
      const cartItem = new CartItem(item);
      if (item.quantity) {
        cartBlock.insertAdjacentHTML('beforeend', cartItem.renderCartItem());
      }
    }
    this.calcCart();
    let result;
    if (this.result.quant) {
      result = `<div class="cart-result">Товаров в корзине: ${this.result.quant}<br>
						Общая сумма: ${this.result.cost} руб</div>`;
    } else {
      result = `<div class="cart-result">Товары в корзине отсутствуют</div>`;
    }
    cartBlock.insertAdjacentHTML('beforeend', result);

  }
  calcCart() {
    // подсчитать стоимость и количество товаров
    this.result.quant = this.allProducts.reduce((sum, elem) => sum += elem.quantity, 0);
    this.result.cost = this.allProducts.reduce((sum, elem) => sum += elem.quantity * elem.price, 0);
  }
}

const cart = new Cart()
document.querySelector('.products').addEventListener('click', e=>{
  console.log('получилось')
  if (e.target.classList.contains('buy-btn')){
    let prodID = +e.target.dataset.id_product
    console.log('i tut')
    cart.addItem(prodID, productList)
    console.log('id doletel')}

})
document.querySelector('.heder').addEventListener('click',e=>{

  if (e.target.classList.contains('btn-cart')){
    document.querySelector('.cart').style.visibility = 'visible'
  }

})
document.querySelector('.cart').addEventListener('click', e => {
  console.log('remove')
  if (e.target && e.target.classList.contains('remove')) {
    cart.removeItem(+e.target.dataset.id_product);
  }
})




