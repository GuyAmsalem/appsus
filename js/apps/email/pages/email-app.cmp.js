import { eventBus, EVENT_REMOVE_EMAIL } from '../../../general/services/event-bus.service.js'
import emailSideNav from '../cmps/email-side-nav.cmp.js'
import { emailService } from '../services/email.service.js'


export default {
    template: `
    <section v-if="emails" class="email-app-container">
      <div class="email-side-nav-container"> 
        <router-link to="/email/compose">
            <button class="compose-btn">Compose</button>
        </router-link>
        <router-link class="compose-btn-mobile-container" to="/email/compose" >
            <button class="compose-btn-mobile">
                <i class="fas fa-pencil-alt"></i>
            </button>
        </router-link>
        <email-side-nav :unread="unreadEmails"></email-side-nav>
      </div>

      <router-view></router-view>    
      
    </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: null
        }
    },
    created() {
        emailService.getEmails()
        .then(emails => {
            this.emails = emails
        })

        eventBus.$on(EVENT_REMOVE_EMAIL, this.removeEmail)
    },
    computed: {
        unreadEmails() {
            const unreadEmails = this.emails.filter(email => !email.isRead)
            return unreadEmails.length
        }
    },
    methods: {
        removeEmail(emailId) {
            emailService.removeEmail(emailId)
                .then(mail => {
                    console.log(mail.id, 'deleted')
                })
           
        }
    },

    components: {
        emailSideNav
    }


}