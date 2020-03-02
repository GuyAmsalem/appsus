import { emailService } from '../services/email.service.js'
import { eventBus, EVENT_SHOW_MSG } from '../../../general/services/event-bus.service.js'


export default {
    template: `
    <section class="email-compose">
    <h2 class="email-compose-title">New Message</h2>
    <form class="compose-form" @submit.prevent="sendEmail">
    <div class="compose-form-row">
        <label>
            To:        
            <input class="compose-input" required type="text" v-model.trim="email.recipient"/>
        </label>    
    </div>

    <div class="compose-form-row">
        <label>
            Subject:        
            <input class="compose-input" required type="text" v-model.trim="email.subject"/>
        </label>
    </div>

    <div class="compose-form-row">
        <textarea class="compose-input" rows="15" v-model.trim="email.body" required></textarea>
    </div>
        
    <router-link to="/email/list/inbox">
        <button><i class="fas fa-arrow-left"></i></button>
    </router-link>
    <button type="submit">Send</button>
    </form>

</section>
    `,
    data() {
        return {
            email: emailService.getEmptyEmail()
        }
    },
    methods: {
        sendEmail(){
            emailService.sendEmail(this.email)
                .then((email) => {
                    eventBus.$emit(EVENT_SHOW_MSG, { txt: 'Email sent', type: 'success' })                    
                    this.$router.push('/email')
                })
        }
    }
}