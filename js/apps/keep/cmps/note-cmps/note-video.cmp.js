
export default {
    template: `     
        <div>
            <iframe width="100%"  :src="formattedVidLink"></iframe>
            <div class="note-icons-container flex space-between">
                <i class="fas fa-video"></i>
                <nav class="note-features flex space-around">
                    <i class="fas fa-thumbtack" @click="$emit('pin')" 
                    v-bind:class="{ 'fas fa-thumbtack': !note.isPinned, 'fas fa-thumbtack pinned': note.isPinned }"></i>
                    <i class="fas fa-palette" @mouseover="$emit('color')" @mouseleave="$emit('uncolor')"></i>
                    <i class="fas fa-edit" @click="$emit('edit')"></i>
                    <i class="fas fa-trash-alt" @click="$emit('remove')" @mouseover="colorTrash" @mouseout="uncolorTrash"
                    v-bind:class="{ 'fas fa-trash-alt': !hoverTrash, 'fas fa-trash-alt colored': hoverTrash }"></i>
                </nav>
            </div>
        </div>
    `,
    props: ['note'],
    computed: {
        formattedVidLink() {
            let url = this.note.info.url
            const vidId = url.substring(url.length - 11, url.length)
            return 'https://www.youtube.com/embed/' + vidId
        }
    },
    data() {
        return {
            hoverTrash: false
        }
    },
    methods: {
        colorTrash() {
            this.hoverTrash = true
        },
        uncolorTrash() {
            this.hoverTrash = false
        }
    }
}



// 'https://www.youtube.com/embed/' + this.info.src.substring()