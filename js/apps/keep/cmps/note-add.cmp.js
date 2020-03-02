import { keepService } from '../services/keep.service.js';
import { eventBus, EVENT_SHOW_MSG } from '../../../general/services/event-bus.service.js'
import textInput from './text-input.cmp.js'
import imgInput from './img-input.cmp.js'
import videoInput from './video-input.cmp.js'
import todosInput from './todos-input.cmp.js'



{/* <input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label><br>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label><br>
<input type="radio" id="other" name="gender" value="other">
<label for="other">Other</label> */}

export default {
    template: `
    <section class="note-add-container flex center">
        <form @submit.prevent="saveNote" v-for="(input, idx) in inputs">
                    <component 
                    :is="input.type" 
                    :info="input.info"
                    @changed="setValue($event)"
                    v-if="input.type === type"
                    ></component>
        </form>
        <div class="note-selection flex space-around align-center">
            <i @click="changeType('textInput')" class="fas fa-font" :class="inputActive('textInput')"></i>
            <i @click="changeType('imgInput')" class="far fa-image" :class="inputActive('imgInput')"></i>
            <i @click="changeType('videoInput')" class="fas fa-video" :class="inputActive('videoInput')"></i>
            <i @click="changeType('todosInput')" class="fas fa-list" :class="inputActive('todosInput')"></i>
        </div>
    </section>
    `,
    props: [''],
    data() {
        return {
            inputs: null,
            type: 'textInput',
            note: keepService.getEmptyNote()
        }
    },
    methods: {
        changeType(type) {
            this.type = type;
            if (this.type === 'textInput') this.note = keepService.getEmptyNote('noteText')
            if (this.type === 'imgInput') this.note = keepService.getEmptyNote('noteImg')
            if (this.type === 'videoInput') this.note = keepService.getEmptyNote('noteVideo')
            if (this.type === 'todosInput') this.note = keepService.getEmptyNote('noteTodos')
        },
        setValue(val) {
            if (this.note.type === 'noteText') this.note.info.txt = val
            if (this.note.type === 'noteImg') this.note.info.url = val
            if (this.note.type === 'noteVideo') this.note.info.url = val
            if (this.note.type === 'noteTodos') this.note.info.todos = val
        },
        saveNote() {
            keepService.saveNote(this.note)
                .then(note => {
                    eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Note Saved', type: 'success' })
                    this.note = keepService.getEmptyNote(this.note.type)
                })
        },
        inputActive(type) {
            return { 'active': this.type === type }
        },
    },
    created() {
        keepService.getInputs()
            .then(inputs => {
                this.inputs = inputs
            })
    },
    components: {
        textInput,
        imgInput,
        videoInput,
        todosInput
    }
}


