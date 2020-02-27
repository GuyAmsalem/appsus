import { keepService } from '../services/keep.service.js';
import noteText from './note-text.cmp.js'

export default {
    template: `
    <section class="note-add-container">
        <h2>Add Note</h2>
        <form @submit.prevent="saveNote" v-for="(input, idx) in inputs">
                    <component 
                    :is="input.type" 
                    :info="input.info"
                    @changed="setValue($event)"
                    ></component>
                <i class="fas fa-font"></i>
        </form>
        {{this.note}}
    </section>
    `,
    props: [''],
    data(){
        return {
          inputs: null,
        //   val: null,
          note: keepService.getEmptyNote()
        }
    },
    methods: {
      setValue(val){
          if(this.note.type === 'noteText') this.note.info.txt = val
      },
      saveNote(){
          console.log('saving')
          //maybe deep copy
          keepService.saveNote(this.note)
          .then(note => {
          console.log(note, 'is saved')
          this.note = keepService.getEmptyNote()    
          })
      }
    },
    created(){
        keepService.getInputs()
        .then(inputs => {
            this.inputs = inputs
        })          
    },
    components: {
        noteText
    }
}

// <button @click="saveNote($event)">SAVE</button>"
