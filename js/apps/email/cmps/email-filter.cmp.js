

export default {
    template: `
    <section class="email-filter">
        <input class="email-filter-text" type="text" 
            placeholder="Search Mail" 
            v-model="filterBy.txt" 
        /> 

        <select class="email-filter-select" v-model="filterBy.read">
            <option selected>All</option>
            <option>Read</option>
            <option>Unread</option>
        </select>

    </section>
    `,
    data() {
        return {
            filterBy: {txt: '', read: 'All', folder: 'inbox'}
        }
    },
    watch: {
        filterBy: {
            handler() {
                 this.emitFilter();
            },
            deep: true
        }, 
        '$route.params.filterBy'(to){
           this.filterBy.folder = to           
        }
     },
     methods:{
         emitFilter() {
             this.$emit('set-filter', this.filterBy)
         }
     }

}