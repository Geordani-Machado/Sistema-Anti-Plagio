<template>
<div>
 
     <div class="flex md:p-36">
      <div class="w-5/12">
        <h1 class="font-bold  justify-center  text-white md:text-6xl sm:text-2xl">Sistema para indentificar possiveis plagios</h1>
      </div>
      
     </div>
  
  
  <ImputConsole/>

  
</div>
  </template>
  
  <script>
  export default {
    name: "HomeIndex",
    props: {
        msg: String
        
    },
    data(){
      return{
        tasks: ""
      }
    },
    methods:{
      
    },
    components: {  }
}
  </script>

  <script setup>
  import ImputConsole from "../components/ImputConsole.vue"
</script>
  
  
  