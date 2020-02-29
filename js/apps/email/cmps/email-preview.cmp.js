import {utilService} from '../../../general/services/util.service.js'

export default {
    template: `
        <article v-if="email" class="email-pre-card">
            <p>{{email.sender.name}}</p>
            <p>{{txtToShow}}</p>
            <p>{{timeToShow}}</p>
        </article>
    `,
    props: ['email'],
    methods: {
        getPreviewTxt() {
            const subject = this.email.subject
            const body = this.email.body
            const txt = subject + ' - ' + body
            console.log(txt);
            
            this.previewTxt = utilService.getShortTxt(txt, 50)
        },
     
    },
    computed: {
        txtToShow() {
            const subject = this.email.subject
            const body = this.email.body
            const txt = subject + ' - ' + body
            return utilService.getShortTxt(txt, 50)
        },
        timeToShow() {
            return moment(this.email.sendAt).format('LT');
        }
    }
}