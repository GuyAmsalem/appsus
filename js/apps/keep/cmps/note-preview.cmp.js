import noteText from './note-cmps/note-text.cmp.js'
import noteImg from './note-cmps/note-img.cmp.js'
import noteVideo from './note-cmps/note-video.cmp.js'
import noteTodos from './note-cmps/note-todos.cmp.js'
import noteEdit from './note-edit.cmp.js'


export default {
    template: `
        <div class="user-note-container" v-bind:style="{backgroundColor: style.backgroundColor}">
            <component
            :is="note.type" 
            :note="note"
            @remove="$emit('remove')"
            @edit="toggleEditMode"
            >
            </component>
            <note-edit  v-if="editMode" :note="note" @edit="toggleEditMode"></note-edit>
        </div>
    `,
    props: ['note'],
    components: {
        noteText,
        noteImg,
        noteVideo,
        noteTodos,
        noteEdit
    },
    data(){
        return {
          editMode: false,
          style:{
              backgroundColor: '#d8c3a5'
          }
        }
    },
    methods: {
        toggleEditMode(){
            console.log('toggle edit')
            this.editMode = !this.editMode
        }
    }
}

{/* <button @click.stop="$emit('remove')">x</button>       */}