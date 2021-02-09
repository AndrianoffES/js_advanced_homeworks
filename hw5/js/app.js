//надеюсь гиткракен не заглючит снова
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const app = new Vue({
    el: "#app",
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        imgCatalog:'https://placehold.it/200x150',
        products:[],
        filtered:[],
        searchLine:'',
        cartProducts:[],
        isVisibleCart:false,


    },
    methods:{
        getProducts(url) {
            return fetch(url)
                .then((response) => response.json())
                .catch((error) => {
                    console.log(error);
                });
        },
        addProduct(product){
                this.getProducts(`${API}/addToBasket.json`)
                    .then(data => {
                        if (data.result === 1) {
                            let elemId = this.cartProducts.find(item => item.id_product === product.id_product);
                            if (elemId) {
                                elemId.quantity++;
                            } else {
                                let prod = Object.assign({quantity: 1}, product)
                                this.cartProducts.push(prod);
                            }
                        }
                    })
        },
        deleteProduct(product){
            console.log(product)
            if(product.quantity>1){
                product.quantity--;
            }else
            this.cartProducts.pop(product)
        },
        filter(){
            const regexp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));


            }

    },


    created(){

    },
    mounted(){
        this.getProducts(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartProducts.push(el);
                }
            });
        this.getProducts(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    }
})