
export default {
    template: `     
            <div class="note-img flex col" >
                <img :src="note.info.url"/>
                <div class="note-icons-container flex space-between">
                    <i class="far fa-image"></i>
                    <nav class="note-features flex space-around">
                        <i class="fas fa-thumbtack" @click="$emit('pin')" 
                        v-bind:class="{ 'fas fa-thumbtack': !note.isPinned, 'fas fa-thumbtack pinned': note.isPinned }"></i>
                        <i class="fas fa-palette" @mouseover="$emit('color')"></i>
                        <i class="fas fa-edit" @click="$emit('edit')"></i>
                        <i class="fas fa-trash-alt" @click="$emit('remove')" @mouseover="colorTrash" @mouseout="uncolorTrash"
                        v-bind:class="{ 'fas fa-trash-alt': !hoverTrash, 'fas fa-trash-alt colored': hoverTrash }"></i>
                    </nav>
                </div>
            </div>
    `,
    props: ['note'],
    created(){
        console.log('info!!!!', this.note.info)
    },
    data(){
        return {
          hoverTrash: false
        }
    },
    methods: {
        colorTrash() {
          this.hoverTrash = true
        },
        uncolorTrash(){
          this.hoverTrash = false
        }
    }
}