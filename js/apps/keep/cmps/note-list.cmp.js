import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="cars-container">
        <h2>Cars List</h2>
        <ul>
            <li v-for="(currNote, idx) in notes" >
                <car-preview :car="currCar"></car-preview>
               
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