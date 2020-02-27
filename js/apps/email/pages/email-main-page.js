import emailList from '../cmps/email-list.cmp.js'
import { emailService } from '../services/email.service.js'

export default {
    template: `
        <email-list :emails="emails"></email-list>
    `,
    data() {
        return {
            emails: null
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