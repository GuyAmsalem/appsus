import { emailService } from '../services/email.service.js'
import  emailList from '../cmps/email-list.cmp.js'

export default {
    template: `
    <section>
      <h1>Mail app</h1>
      <email-list :emails="emails"></email-list>    
     
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
    },
    components: {
        emailList
    }


}