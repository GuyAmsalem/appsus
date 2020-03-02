import { keepService } from '../services/keep.service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../general/services/event-bus.service.js'
export default {
    template: `     
          <div class="note-edit-container">
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
        getPrevData() {
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
        saveNote() {
            console.log('enter test')
            if (this.note.type === 'noteText') this.note.info.txt = this.newData
            if (this.note.type === 'noteImg') this.note.info.url = this.newData
            if (this.note.type === 'noteVideo') this.note.info.url = this.newData
            if (this.note.type === 'noteTodos') this.note.info.todos = this.newData
            keepService.saveNote(this.note)
                .then(note => {
                    eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Note: ' + this.note.id + ' updated', type: 'success' })
                })
        }
    },
    created() {
        this.getPrevData()
    }
}