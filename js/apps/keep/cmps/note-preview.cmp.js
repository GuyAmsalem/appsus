import { keepService } from '../services/keep.service.js';
import noteText from './note-cmps/note-text.cmp.js'
import noteImg from './note-cmps/note-img.cmp.js'
import noteVideo from './note-cmps/note-video.cmp.js'
import noteTodos from './note-cmps/note-todos.cmp.js'
import noteEdit from './note-edit.cmp.js'


export default {
    template: `
        <div class="user-note-container" v-bind:style="{backgroundColor: note.style.backgroundColor}">
            <component
            :is="note.type" 
            :note="note"
            @remove="$emit('remove')"
            @edit="toggleEditMode"
            @color="toggleEditColor"
            >
            </component>
            <div v-if="editColor" class="note-color-picker flex space-around">
                 <i @click="changeColor('#d8c3a5')" class="fas fa-brush"></i>
                 <i @click="changeColor('#8e8d8a')" class="fas fa-brush"></i>
                 <i @click="changeColor('#e98074')" class="fas fa-brush"></i>
                 <i @click="changeColor('#e85a4f')" class="fas fa-brush"></i>
                 <i @click="changeColor('#fa291a')" class="fas fa-brush"></i>   
            </div>  
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
          editColor:false,
        //   style:{
        //       backgroundColor: ''
        //   }
        }
    },
    methods: {
        toggleEditMode(){
            console.log('toggle edit')
            this.editMode = !this.editMode
        },
        changeColor(color){
        //   this.style.backgroundColor = color
          this.note.style.backgroundColor = color
          keepService.saveNote(this.note)
          .then(note =>{
              console.log(note.id, 'colorChange saved')
          })
        },
        // setColors(){
        //     this.style.backgroundColor = this.note.style.backgroundColor
        // },
        toggleEditColor(){
            this.editColor = !this.editColor
        }
    },
    // created(){
    //     this.setColors()
    // }
}

{/* <button @click.stop="$emit('remove')">x</button>       */}