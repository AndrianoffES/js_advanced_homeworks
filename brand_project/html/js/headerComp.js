Vue.component('header-comp',{
    data(){
        return {
            userSearch: ''
        }
    },
    methods:{

    },
    template:`
      
        <div>
        <form class="topSearch" @submit.prevent="$parent.$refs.products.filter(userSearch)">
            <div>Browse
                <i class="fas fa-caret-down"></i>
            </div>
            <input type="text" placeholder="Search for Item..." v-model="userSearch">
            <button>
                <i class="fas fa-search"></i>
            </button>
        </form>   
</div>
        
`
})