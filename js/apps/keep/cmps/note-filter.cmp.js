
export default {
    template: `
    <section class="note-filter">
        <input type="text" 
            placeholder="🔍Search Notes" 
            v-model="filterBy.txt"
            class="search-note-input" 
        />
    </section>
    `,
    data() {
        return {
            filterBy: { txt: '' }
        }
    },
    watch: {
        filterBy: {
            handler() {
                this.emitFilter();
            },
            deep: true
        },
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filterBy)
        }
    }

}