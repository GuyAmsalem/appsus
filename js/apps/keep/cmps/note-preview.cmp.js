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
            @color="activateEditColor"
            @uncolor="inactivateEditColor"
            @pin="togglePinNote"
            >
            </component>
            <transition name="fade">
                <div v-bind:class="{ 'note-color-picker flex space-around': !editColor, 'note-color-picker flex space-around shown': editColor }" 
                @mouseleave="inactivateEditColor" @mouseover="activateEditColor">
                    <i @click="changeColor('#ffa350')" class="fas fa-brush"></i>
                    <i @click="changeColor('#f78888')" class="fas fa-brush"></i>
                    <i @click="changeColor('#f3d250')" class="fas fa-brush"></i>
                    <i @click="changeColor('#90ccf4')" class="fas fa-brush"></i>
                    <i @click="changeColor('#4caf50')" class="fas fa-brush"></i>   
                </div>
            </transition>  
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
    data() {
        return {
            editMode: false,
            editColor: false,
        }
    },
    methods: {
        toggleEditMode() {
            this.editMode = !this.editMode
        },
        changeColor(color) {
            this.note.style.backgroundColor = color
            keepService.saveNote(this.note)
                .then(note => {
                    console.log(note.id, 'colorChange saved')
                })
        },
        activateEditColor() {
            this.editColor = true
        },
        inactivateEditColor() {
            this.editColor = false
        },
        togglePinNote() {
            this.note.isPinned = !this.note.isPinned
            keepService.saveNote(this.note)
                .then(note => {
                    console.log(note.id, 'pinned state saved')
                })
        }
    },
}

{/* <button @click.stop="$emit('remove')">x</button>       */ }

// v-if="editColor"