Vue.component('errComp', {
    data(){
      return {textErr:''}
    },
        methods:{
            getError(error){
                this.textErr = error
            }
        },
    computed:{
        visible(){
            return this.textErr !==''
        }
    },
    template: `<div class="error" v-if="visible">
                      <p class="error-message"> ERROR{{textErr}}</p>
                </div>`
    });