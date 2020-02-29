
export default {
    template: `
    <section class="note-filter">
        <input type="text" 
            placeholder="Search Note" 
            v-model="filterBy.txt" 
        />
    </section>
    `,
    data() {
        return {
            filterBy: {txt: ''}
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
     methods:{
         emitFilter() {
             this.$emit('set-filter', this.filterBy)
         }
     }

}