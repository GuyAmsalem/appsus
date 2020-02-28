import emailList from '../cmps/email-list.cmp.js'
import { emailService } from '../services/email.service.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
    template: `
    <section class="email-main-page">
        <email-filter @set-filter="setFilter" ></email-filter>
        <email-list :emails="emailsForDisplay"></email-list>
    </section>
    `,
    data() {
        return {
            emails: null,
            filterBy: null
        }
    },
    computed: {
        emailsForDisplay() {
            if (!this.filterBy) return this.emails;
            var filteredEmails = this.emails.filter(email =>
                email.sender.name.includes(this.filterBy.txt) ||
                email.sender.emailAdrress.includes(this.filterBy.txt) ||
                email.subject.includes(this.filterBy.txt) ||
                email.body.includes(this.filterBy.txt)
            )
            if (this.filterBy.read !== 'All') {
                let isRead = (this.filterBy.read === 'Read') ? true : false
                filteredEmails = filteredEmails.filter(email => email.isRead === isRead)
            }
            if (this.filterBy.folder) {
                console.log('route param', this.$route.params.filterBy);
                
                let folderName = this.filterBy.folder
                filteredEmails = filteredEmails.filter(email => {
                    return email.folders[folderName] === true
                })
            }
            return filteredEmails
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => {
                this.emails = emails
            })
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
    },
    components: {
        emailList,
        emailFilter
    }
}           