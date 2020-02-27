import {utilService} from '../../../general/services/util.service.js'


export default {
    template: `
        <section class="email-extended-container">
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
    created() {
        this.emailBodyTxt = utilService.getShortTxt(this.email.body, 150) 
    }

}