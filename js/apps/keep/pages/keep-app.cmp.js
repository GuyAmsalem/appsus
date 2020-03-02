import { keepService } from '../services/keep.service.js';
import noteAdd from '../cmps/note-add.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

export default {
  template: `
    <section v-if="userNotes">
      <h2 class="keep-title">Appsus Keep</h2>
      <note-add></note-add>
      <note-filter @set-filter="setFilter"></note-filter>
      <note-list :userNotes="notesForDisplay" @remove="removeNote"></note-list>
    </section>
  `,
  data() {
    return {
      userNotes: null,
      filterBy: null,
    }
  },
  computed: {
    notesForDisplay() {
      if (!this.filterBy) return this.userNotes;
      var lowerFilterTxt = this.filterBy.txt.toLowerCase()
      var filteredNotes = this.userNotes.filter(note => {
        if (note.type === 'noteText') return note.info.txt.toLowerCase().includes(lowerFilterTxt)
        if (note.type === 'noteImg' || note.type === 'noteVideo') return note.info.url.toLowerCase().includes(lowerFilterTxt)
        if (note.type === 'noteTodos') {
          return note.info.todos.some(todo => {
            return todo.txt.toLowerCase().includes(lowerFilterTxt)
          })
        }
      })
      return filteredNotes
    }
  },
  created() {
    keepService.getUserNotes()
      .then(userNotes => {
        this.userNotes = userNotes
      })
  },
  methods: {
    removeNote(noteId) {
      keepService.removeNote(noteId)
        .then(deletedNoteId => {
          console.log(deletedNoteId, 'is gone')
        })
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
  },
  components: {
    noteList,
    noteAdd,
    noteFilter
  },
}