
    const {createApp} = Vue;

    createApp({
        data() {
      return {
        movie:{
              titolo: "Lorem, ipsum dolor sit amet consectetur adipisicing elit expedita voluptatum unde laboriosam molestiae.",
            
              testo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iste deserunt doloremque hic eaque culpa aspernatur",

              images:[
                "./img/01.webp",
                "./img/02.webp",
                "./img/03.webp",
                "./img/04.webp",
                "./img/05.webp"
            ],
         
            activeImage:0 

        }
        
      }
    },

    methods:{
        prevImage(){
           this.movie.activeImage--;
        },


        nextImage(){
           this.movie.activeImage++;
        },
    },

    created(){

    },

    mounted(){

    }

  }).mount('#app')