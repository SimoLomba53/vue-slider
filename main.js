
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
           if(this.movie.activeImage -1 < 0){
            this.movie.activeImage=this.movie.images.length -1;
           }else{
             this.movie.activeImage--;
           }
        },


        nextImage(){ 
          if(this.movie.activeImage +1 >= this.movie.images.length){
            this.movie.activeImage=0;
          }else{
            this.movie.activeImage++;   
          }
        },
        
        switchToImages(index){
          this.movie.activeImage=index;
        }
    },

    created(){
       setInterval(()=>{
        this.nextImage();
       }, 3000)
    },

    mounted(){

    }

  }).mount('#app')