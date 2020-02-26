import emailService from './sevices/email.service.js'

export default {
    template: `
    <section>
      <h1>Mail app</h1>
      <pre>emails</pre>
    </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: null
        }
    },
    created(){
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
            })
    },

   
}