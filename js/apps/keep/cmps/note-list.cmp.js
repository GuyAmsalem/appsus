import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="notes-container">
        <h2>Note List</h2>
        <ul>
            <li v-for="(currNote, idx) in notes" >
                <note-preview :note="currNote"></note-preview> 
            </li>
        </ul>
    </section>
    `,
    props: ['notes'],
    components: {
        notePreview
    }
}


{/* <button @click="$emit('remove', currCar.id)">x</button> */}