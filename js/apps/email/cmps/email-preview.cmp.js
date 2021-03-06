import {utilService} from '../../../general/services/util.service.js'

export default {
    template: `
        <article v-if="email" class="email-pre-card" :class="emailRead">
            <p>{{email.sender.name}}</p>
            <p>{{txtToShow}}</p>
            <p>{{timeToShow}}</p>
        </article>
    `,
    props: ['email'],
  
    computed: {
        txtToShow() {
            const subject = this.email.subject
            const body = this.email.body
            const txt = subject + ' - ' + body
            return utilService.getShortTxt(txt, 70)
        },
        timeToShow() {
            return moment(this.email.sendAt).format('LT');
        },
        emailRead(){
            return (this.email.isRead)? 'read-email' : 'unread-email'
        }
    }
}