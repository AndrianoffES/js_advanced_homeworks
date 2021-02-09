
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/';
const app = new Vue({
    el: "#app",
    data: {
        catalogUrl: '/catalogData.json',
        imgCatalog:'https://placehold.it/200x150',
        products:[],
        filtered:[],
        searchLine:''

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
            console.log(product)
        },
        filter(){
            const regexp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));

            }

    },
    created(){
        this.getProducts(`${API + this.catalogUrl}`).then((data) => {
            for(let elem of data){
                this.products.push(elem);
            }
            this.filtered = this.products


    });

    },
    mounted(){
        this.products = this.filtered;
    }
})