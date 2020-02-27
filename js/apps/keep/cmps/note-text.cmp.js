
export default {
    template: `
    <div>
        <template>
                <input type="text" 
                v-model="txt" 
                :placeholder="info.placeholder"
                @input="$emit('changed', txt)"
                @keyup.enter="$emit('done')">
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