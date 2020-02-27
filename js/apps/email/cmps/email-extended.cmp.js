import {utilService} from '../../../general/services/util.service.js'
import {eventBus, EVENT_REMOVE_EMAIL} from '../../../general/services/event-bus.service.js'


export default {
    template: `
        <section class="email-extended-container">
        <button @click="removeEmail">x</button>
        <h2>{{email.subject}}</h2>
        <h3>{{email.sender}}</h3>
        <p>{{emailBodyTxt}}</p>
        </section>
    `,
    props: ['email'],
    data() {
        return {
            emailBodyTxt : null
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