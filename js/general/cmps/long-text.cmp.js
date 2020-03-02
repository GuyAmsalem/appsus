
export default {
    template: `
            <p class="long-text-formatted">
                {{shortTxt}} 
                <span class="long-text-btn" @click="toggleReadMore">{{readingLength}}</span>
            </p>
`,
    data() {
        return {
            isReadMore: false
        }
    },
    props: ['txt', 'limit'],
    computed: {
        shortTxt() {
            const txt = this.txt
            if (this.isReadMore && txt.length > this.limit) {
                return txt
            } else if (!this.isReadMore && txt.length > this.limit) {
                return txt.substring(0, this.limit - 4) + '...'
            } else {
                return txt
            }
        },
        readingLength() {
            if (!this.isReadMore && this.txt.length > this.limit) return 'read more'
            else if (this.isReadMore) return 'read less'
            else return ''
        }
    },
    methods: {
        toggleReadMore() {
            this.isReadMore = !this.isReadMore
        }
    }
}