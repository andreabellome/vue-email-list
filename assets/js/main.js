const { createApp } = Vue;
createApp({
    data() {
      return {
        /* variables Vue 3 */
        email: ''
      }
    },
    created(){
        
    },
    methods: {
        /* functions Vue 3 */
        attivaApi(){

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( res => {
                    this.email = res.data.response
                } )
            }
            
        }
    }
}).mount('#app')