import { emailService } from '../services/email.service.js'
import { eventBus, EVENT_REMOVE_EMAIL } from '../../../general/services/event-bus.service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailSideNav from '../cmps/email-side-nav.cmp.js'


export default {
    template: `
    <section class="email-app-container">
      <div class="email-side-nav-container"> 
        <button >Compose</button>
        <email-side-nav></email-side-nav>
      </div>
      <email-list :emails="emails" @EVENT_REMOVE_EMAIL="removeEmail"></email-list>    
      
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
    methods: {
        removeEmail(emailId) {
            emailService.removeEmail(emailId)
                .then(mail => {
                    console.log(mail.id, 'delted')
                })
            // .then(()=>{
            //     console.log(`Car ${emailId} deleted succesfully`);
            //     eventBus.$emit(EVENT_SHOW_MSG, {
            //         txt: `Car ${emailId} deleted succesfully`,
            //         type: 'success'
            //     })
            // })
        }
    },

    components: {
        emailList,
        emailSideNav
    }


}