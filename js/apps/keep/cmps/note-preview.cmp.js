import noteText from './note-cmps/note-text.cmp.js'
import noteImg from './note-cmps/note-img.cmp.js'
import noteVideo from './note-cmps/note-video.cmp.js'


export default {
    template: `
        <div class="user-note-container">
            <component
            :is="note.type" 
            :info="note.info"
            >


            </component>
            <button @click.stop="$emit('remove')">x</button>      
        </div>
    `,
    props: ['note'],
    components: {
        noteText,
        noteImg,
        noteVideo
    }
}