import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <div>
            <h4 class="pin-title">Pinned</h4>
            <section class="user-notes-container" >
                <template  v-for="(currNote, idx) in pinnedNotes">
                    <note-preview @remove="$emit('remove', currNote.id)" :note="currNote"></note-preview>
                </template>
            </section>
            <h4 class="pin-title">unPinned</h4>
            <section class="user-notes-container" >
                <template  v-for="(currNote, idx) in unpinnedNotes">
                    <note-preview @remove="$emit('remove', currNote.id)" :note="currNote"></note-preview> 
                </template>
            </section>
            
    </div>
    `,
    props: ['userNotes'],
    components: {
        notePreview
    },
    computed: {
        pinnedNotes() {
            return this.userNotes.filter(note => note.isPinned)
        },
        unpinnedNotes() {
            return this.userNotes.filter(note => !note.isPinned)
        }
    }

}


