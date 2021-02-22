Vue.component('cart', {
    data(){
      return {
          imgCart: 'img',
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            let findItem = this.cartItems.find(el => el.id_product === item.id_product);
            if (findItem.quantity>1) {
                this.$parent.putJson(`/api/cart/${findItem.id_product}`, {quantity: -1})
                findItem.quantity--;

            } else {

                this.$parent.deleteJson(`/api/cart/${findItem.id_product}`, item)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(findItem,1);
                        }
                    });
            }

        },

    },
    mounted(){
        this.$parent.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <div class="sideCart">
            <button class="headerCart" type="button" @click="showCart = !showCart">
            <img  src="../img/basket.png" alt="basket"></button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Cart is empty</p>
                <a href="cart.html" v-if="cartItems.length">To cart</a>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="item.img"
                @remove="remove">
                </cart-item>
            </div>
        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
                <div class="cart-item">
                <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                        <p class="product-single-price">{{cartItem.price}} $ per item</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">TOTAL {{cartItem.quantity*cartItem.price}} $</p>
                    <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                </div>
            </div>
    `
});
