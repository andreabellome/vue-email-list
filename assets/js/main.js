const { createApp } = Vue;
createApp({
    data() {
      return {
        /* variables Vue 3 */
        email: []
      }
    },
    mounted(){
        this.attivaApi()
    },
    methods: {
        /* functions Vue 3 */
        attivaApi(){

            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( res => {
                    this.email.push(res.data.response)
                } )
            }
            
        }
    }
}).mount('#app')