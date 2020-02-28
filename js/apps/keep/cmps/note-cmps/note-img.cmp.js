
export default {
    template: `     
            <div class="note-img flex col" >
                <img :src="note.info.url"/>
                <div class="note-icons-container flex space-between">
                    <i class="far fa-image"></i>
                    <nav class="note-features flex space-around">
                        <i class="fas fa-thumbtack"></i>
                        <i @click="$emit('color')" class="fas fa-palette"></i>
                        <i class="fas fa-edit" @click="$emit('edit')"></i>
                        <i class="fas fa-trash-alt" @click="$emit('remove')"></i>
                    </nav>
                </div>
            </div>
    `,
    props: ['note'],
    created(){
        console.log('info!!!!', this.note.info)
    }
}