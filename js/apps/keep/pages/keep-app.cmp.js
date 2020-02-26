import { keepService } from '../services/keep.service.js';
import noteList from '../cmps/note-list.cmp.js'


export default {
  template: `
    <section>
      <h1>Keep app</h1>
      <note-list :notes="notesForDisplay"></note-list>
    </section>
  `,
  data() {
    return {
        notes: [],
        filterBy: null,
    }
  },
  computed: {
    notesForDisplay(){
      if (!this.filterBy) return this.notes;
    }
  },
  created(){
    keepService.getNotes()
    .then(notes =>{
      this.notes = notes
    })  
  },
  components:{
    noteList,
  },
}