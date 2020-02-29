
export default {
    template: `
    <div>
        <template>
                <input type="text" 
                v-model="txt" 
                :placeholder="info.placeholder"
                @input="$emit('changed', txt)"
                >
        </template>
    </div>    
    `,
    props: ['info'],
    data (){
        return {
          txt: ''
        }
    },
   
    
    
  
}