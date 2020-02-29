export default {
    template: `
    <div>
        <template>
                <input type="text" 
                v-model="todos" 
                :placeholder="info.placeholder"
                @input="$emit('changed', todos)"
                class="note-input"
                >
        </template>
    </div>    
    `,
    props: ['info'],
    data (){
        return {
          todos: ''
        }
    },
    
    
  
}