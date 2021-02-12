Vue.component('search-form', {
    props:['filter'],
    data(){
      return{userSearch:''}
    },
    methods:{

    },
    template: `<form action="#" class="search-form">
                    <input type="text" class="search-field"
                    v-model="userSearch"
                    v-on:input="$emit('input', $event.target.value)"
                    @keydown.enter="$root.$refs.products.filter(userSearch)">
                    <button class="btn-search" type="submit" @click="$root.$refs.products.filter(userSearch)">
                        <i class="fas fa-search"></i>
                    </button>
                </form>`
    }

)