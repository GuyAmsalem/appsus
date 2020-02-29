import {utilService} from '../../../general/services/util.service.js'
import {eventBus, EVENT_REMOVE_EMAIL} from '../../../general/services/event-bus.service.js'


export default {
    template: `
        <section class="email-extended-container">
        <button @click="removeEmail">X</button>
        <router-link :to="'/email/details/'+email.id">
            <button>Details</button>
        </router-link>
        
        <h2>{{email.subject}}</h2>
        <h3>{{email.sender.name}} <span><{{email.sender.emailAdrress}}></span></h3>
        <p>{{emailBodyTxt}}</p>
        </section>
    `,
    props: ['email'],
    data() {
        return {
            emailBodyTxt : null
        }
    },
    computed: {
        showDetails() {
            return '/email/details/' + this.email.id
        }
    },
    methods: {
        removeEmail(ev) {
            ev.stopPropagation();
            eventBus.$emit(EVENT_REMOVE_EMAIL, this.email.id)
        }
     
    },
    created() {
        this.emailBodyTxt = utilService.getShortTxt(this.email.body, 150) 
    }

}