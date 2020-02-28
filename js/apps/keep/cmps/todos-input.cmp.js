export default {
    template: `
    <div>
        <template>
                <input type="text" 
                v-model="todos" 
                :placeholder="info.placeholder"
                @input="$emit('changed', todos)"
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