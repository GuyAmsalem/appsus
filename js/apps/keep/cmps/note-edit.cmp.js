import { keepService } from '../services/keep.service.js';

export default {
    template: `     
          <div>
            <form @submit.prevent="saveNote" >
                <input type="text" v-model="newData" 
                    placeholder="Please enter your changes"> 
            </form>
          </div>
    `,
    props: ['note'],
    data() {
        return {
            newData: '',
        }
    },
    methods: {
        getPrevData(){
            switch (this.note.type) {
                case 'noteText':
                    return this.newData = this.note.info.txt;

                case 'noteImg':
                    return this.newData = this.note.info.url;

                case 'noteVideo':
                    return this.newData = this.note.info.url;

                case 'noteTodos':
                    return this.newData = this.note.info.todos.map(todo => todo.txt).join(', ');
            }
        },
        saveNote(){
            console.log('enter test')
            if (this.note.type === 'noteText') this.note.info.txt = this.newData
            if (this.note.type === 'noteImg') this.note.info.url = this.newData
            if (this.note.type === 'noteVideo') this.note.info.url = this.newData
            if (this.note.type === 'noteTodos') this.note.info.todos = this.newData
            keepService.saveNote(this.note)
            .then(note =>{
                console.log(note.id, 'updated!')
            })
        }
    },
    created(){
        this.getPrevData()
    }
}