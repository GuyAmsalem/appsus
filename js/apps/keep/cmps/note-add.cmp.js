import { keepService } from '../services/keep.service.js';
import noteText from './note-text.cmp.js'

export default {
    template: `
    <section class="note-add-container">
        <h2>Add Note</h2>
        <form @submit.prevent v-for="(input, idx) in inputs">
            <component 
                    :is="input.type" 
                    :info="input.info"
                    @changed="setAns($event)"
                    @done="saveNote"
                    ></component>
        </form>
        <h1>{{ans}}</h1>
        {{this.note}}
    </section>
    `,
    props: [''],
    data(){
        return {
          inputs: null,
          ans: null,
          note: keepService.getEmptyNote()
        }
    },
    methods: {
      setAns(ans){
          if(this.note.type === 'noteText') this.note.info.txt = ans
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