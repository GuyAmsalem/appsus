import { keepService } from '../../services/keep.service.js';


export default {
    template: `     
            <div class="note-todos" >
                <ul>
                    <li v-for="(todo, idx) in note.info.todos" @click="toggleDone(idx)" v-bind:class="{ '': !todo.isDone, 'todo-done': todo.isDone }">{{todo.txt}}</li>
                </ul>
                <div class="note-icons-container flex space-between">
                    <i class="fas fa-list"></i>
                    <nav class="note-features flex space-around">
                        <i class="fas fa-thumbtack"></i>
                        <i @click="$emit('color')" class="fas fa-palette"></i>
                        <i class="fas fa-edit" @click="$emit('edit')"></i>
                        <i class="fas fa-trash-alt" @click="$emit('remove')"></i>
                    </nav>
                </div>
            </div>
    `,
    props: ['note'],
    methods:{
        toggleDone(todoIdx){
            this.note.info.todos[todoIdx].isDone = !this.note.info.todos[todoIdx].isDone
            keepService.saveNote(this.note)
            .then(note => {
                console.log(note.id, 'todos updated')
            })
        }
    },
}