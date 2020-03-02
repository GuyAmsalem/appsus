import {utilService} from '../../../general/services/util.service.js'
import {eventBus, EVENT_REMOVE_EMAIL , EVENT_SHOW_MSG} from '../../../general/services/event-bus.service.js'


export default {
    template: `
        <section class="email-extended-container">
        <div class="email-extended-header flex space-between">
            <h2 class="extended-subject">{{email.subject}}</h2>
            <div class="email-extend-buttons">
                <button @click="removeEmail">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <router-link :to="'/email/details/'+email.id">
                    <button><i class="fas fa-arrows-alt"></i></button>
                </router-link>
            </div>
        </div>
        
        <h3 class="extended-subject">{{email.sender.name}} <span><{{email.sender.emailAdrress}}></span></h3>
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
            eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Email deleted', type: 'success' })
        }
     
    },
    created() {
        this.emailBodyTxt = utilService.getShortTxt(this.email.body, 350) 
    }

}