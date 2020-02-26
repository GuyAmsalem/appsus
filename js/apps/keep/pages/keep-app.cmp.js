import { keepService } from '../services/keep.service.js';
import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'


export default {
  template: `
    <section>
      <h1>Keep app</h1>
      <note-add></note-add>
      <note-list :userNotes="notesForDisplay"></note-list>
    </section>
  `,
  data() {
    return {
        userNotes: [],
        filterBy: null,
    }
  },
  computed: {
    notesForDisplay(){
      if (!this.filterBy) return this.userNotes;
    }
  },
  created(){
    keepService.getUserNotes()
    .then(userNotes =>{
      this.userNotes = userNotes
    })  
  },
  components:{
    noteList,
    noteAdd
  },
}