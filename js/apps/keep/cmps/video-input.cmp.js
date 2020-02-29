
export default {
    template: `
    <div>
        <template>
                <input type="url" 
                v-model="url" 
                :placeholder="info.placeholder"
                @input="$emit('changed', url)"
                class="note-input"
                >
        </template>
    </div>    
    `,
    props: ['info'],
    data (){
        return {
          url: ''
        }
    },
    
    
  
}