<template>
    <div class="flex flex-col items-center ">
  <div class="w-full  my-8 p-8 items-center bg-white rounded-2xl shadow-xl overflow-hidden sm:max-w-7xl hover:shadow-xl dark:bg-zinc-800">


    <div class="flex justify-between">
      <div>
        <h1 class="mr-2 text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-100 w-6/12">Digite abaixo a pergunta e a sua resposta para a mesma</h1>
        
    </div>

  
    </div>
    
    

    
      <div class="">
        <div>
          <label>Pergunta</label>
            <textarea
            :language_selector="true" 
            v-model="Pergunta" 
            :copy_code="false"
            style="width: 66rem;">
            </textarea>
        </div>
            
          
          <div>
            <label>Resposta</label>
            <textarea 
            :language_selector="true" 
            v-model="Resposta" 
            :copy_code="false"
            style="width: 66rem;">
          </textarea>
          </div>
          
           
            
        
        <div v-on:click="ChatPGT"
          class="w-full text-center py-3 px-8 text-sm font-medium bg-purple-500
           text-gray-100 rounded-2xl cursor-pointer 
          sm:w-min hover:bg-purple-700
           hover:text-gray-50  mb-4 sm:mb-0 h-12 ml-4 mt-4">
          <span>Analisar</span>
        </div>
      </div>
   

  
    <div class=" content-end mt-4">
      <h1 class=" font-bold text-2xl text-gray-100">Chance de ser plagio:</h1>
      <h1 class=" font-bold text-2xl text-gray-100">{{ Analise }} </h1>
    </div>


    
   
  </div>
</div>

</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }

  
</style>

<style>
  .height-200{
    height: 200px  
  }
  
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    /* height:300px; */

    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example:*/
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
</style>

<script>

defineProps({
        Exemple: {
            type: String,
            required: false
        }
    })

import { defineProps } from 'vue'
import sendGPTMessage from '@/services/server';

export default {
    name: "HeaderComponent",
    props: {
        msg: String
    },
    data(){
        return{
            Pergunta: "",
            Resposta: "",
            Console: "",
            Nota: "-",
            Analise: "",
            Profiledecoded: {}
            
        }
        
    },
    methods:{
        async ChatPGT(){
            this.Analise = await sendGPTMessage( "Analise possiveis plagios com base na pergunta: " + this.Pergunta +" e na resposta: " + this.Resposta + " se o mesmo se encontra em algum site e se foi gerado por uma inteligencia artificial, se sim liste em quais sites e ai  ele foi gerado e encontrado")
          
            
            console.log(this.SendConsole)
        },
        
    },
  
    components: {
      
    }

   
  
}
</script>