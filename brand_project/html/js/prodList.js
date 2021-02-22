Vue.component('products', {
    data(){
        return {
            catalogUrl: '',
            products: [],
            filtered: [],

        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/catalog')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="prodImgWrap">
            <product v-for="item of filtered" :key="item.id_product" :img="item.img" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            /**
             * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
             * то мы легко можем получить доступ к ним используя свойство $root.
             * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
             */
            cartAPI: this.$root.$refs.cart,
        };
    },

    template: ` <div class="product">
                    <img class="yml" :src="img" alt="">

                    <div class="borderCover">

                        <button class="coverAddCart"  @click="cartAPI.addProduct(product)">

                            <img src="../img/whBasket.png" alt="basket">
                            Add to Cart
                        </button>
                    </div>

                    <div class="prodDesc">
                        {{product.product_name}} <br>
                        <span>$ {{product.price}}</span>
                    </div>
                </div>
`
});
