import { keepService } from '../../services/keep.service.js';


export default {
    template: `     
            <div class="note-todos" >
                <ul>
                    <li v-for="(todo, idx) in note.info.todos" 
                    @click="toggleDone(idx)" 
                    v-bind:class="{ '': !todo.isDone, 'todo-done': todo.isDone }">{{todo.txt}}</li>
                </ul>
                <div class="note-icons-container flex space-between">
                    <i class="fas fa-list note-todos-icon"></i>
                    <nav class="note-features flex space-around">
                        <i class="fas fa-thumbtack" @click="$emit('pin')" 
                        v-bind:class="{ 'fas fa-thumbtack': !note.isPinned, 'fas fa-thumbtack pinned': note.isPinned }"></i>
                        <i class="fas fa-palette" @mouseover="$emit('color')" @mouseleave="$emit('uncolor')"></i>
                        <i class="fas fa-edit" @click="$emit('edit')"></i>
                        <i class="fas fa-trash-alt" @click="$emit('remove')" @mouseover="colorTrash" @mouseout="uncolorTrash"
                         v-bind:class="{ 'fas fa-trash-alt': !hoverTrash, 'fas fa-trash-alt colored': hoverTrash }"></i>
                    </nav>
                </div>
            </div>
    `,
    props: ['note'],
    data() {
        return {
            hoverTrash: false
        }
    },
    methods: {
        toggleDone(todoIdx) {
            this.note.info.todos[todoIdx].isDone = !this.note.info.todos[todoIdx].isDone
            keepService.saveNote(this.note)
                .then(note => {
                    console.log(note.id, 'todos updated')
                })
        },
        colorTrash() {
            this.hoverTrash = true
        },
        uncolorTrash() {
            this.hoverTrash = false
        }
    },
}