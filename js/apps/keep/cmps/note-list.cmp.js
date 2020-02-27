import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="user-notes-container">
        <h2>USER Note List</h2>
            <template v-for="(currNote, idx) in userNotes" >
                <note-preview :note="currNote"></note-preview> 
            </template>
    </section>
    `,
    props: ['userNotes'],
    components: {
        notePreview
    }
}


{/* <button @click="$emit('remove', currCar.id)">x</button> */}