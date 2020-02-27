import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="user-notes-container">
            <template v-for="(currNote, idx) in userNotes" >
                <note-preview @remove="$emit('remove', currNote.id)" :note="currNote"></note-preview> 
            </template>
    </section>
    `,
    props: ['userNotes'],
    components: {
        notePreview
    },

}


{/* <button @click="$emit('remove', currCar.id)">x</button> */}