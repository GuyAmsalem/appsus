
export default {
    template: `     
        <div>
            <iframe width="400" height="300" :src="formattedVidLink"></iframe>
            <div class="note-icons-container flex space-between">
                <i class="fas fa-video"></i>
                <nav class="note-features flex space-around">
                    <i class="fas fa-thumbtack" @click="$emit('pin')"></i>
                    <i class="fas fa-palette" @click="$emit('color')"></i>
                    <i class="fas fa-edit" @click="$emit('edit')"></i>
                    <i class="fas fa-trash-alt" @click="$emit('remove')"></i>
                </nav>
            </div>
        </div>
    `,
    props: ['note'],
    computed: {
        formattedVidLink() {
            let url = this.note.info.url
            const vidId = url.substring(url.length -11, url.length)
            return 'https://www.youtube.com/embed/' + vidId 
        }
    }
}



// 'https://www.youtube.com/embed/' + this.info.src.substring()