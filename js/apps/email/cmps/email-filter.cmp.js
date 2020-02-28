

export default {
    template: `
    <section class="email-filter">
        <input type="text" 
            placeholder="Search Mail" 
            v-model="filterBy.txt" 
        /> 

        <select v-model="filterBy.read">
            <option selected>All</option>
            <option>Read</option>
            <option>Unread</option>
        </select>

    </section>
    `,
    data() {
        return {
            filterBy: {txt: '', read: 'All', folder: ''}
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
           console.log(this.filterBy);
           
        }
     },
     methods:{
         emitFilter() {
             this.$emit('set-filter', this.filterBy)
         }
     }

}