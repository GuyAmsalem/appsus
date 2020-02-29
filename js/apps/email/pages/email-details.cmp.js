import { emailService } from '../services/email.service.js'
import { eventBus, EVENT_REMOVE_EMAIL, EVENT_SHOW_MSG } from '../../../general/services/event-bus.service.js'


export default {
    template: `
    <section v-if="email" class="emailDetail">
        <h2>{{email.subject}}</h2>
        <h3>{{email.sender.name}} <span><{{email.sender.emailAdrress}}></span></h3>
        <p>{{email.body}}</p>
        <router-link to="/email/list/inbox">
            <button><i class="fas fa-arrow-left"></i></button>
        </router-link>
        <button @click="removeEmail">
            <i class="fas fa-trash-alt"></i>
        </button>
    </section>
    `,
    data(){
        return {
            email: null
        }
    },
    methods: {
        removeEmail(ev) {
            ev.stopPropagation();
            eventBus.$emit(EVENT_REMOVE_EMAIL, this.email.id)
            eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Email deleted', type: 'success' })
                this.$router.push('/email/inbox')
        }
    },
    created(){
        emailService.getById(this.$route.params.id)
            .then(email => this.email = email)
    }
}