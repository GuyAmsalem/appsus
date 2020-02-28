import {utilService} from '../../../general/services/util.service.js'

export default {
    template: `
        <article v-if="email" class="email-pre-card">
            <p>{{email.sender.name}}</p>
            <p>{{previewTxt}}</p>
            <p>{{sentAtDate}}</p>
        </article>
    `,
    props: ['email'],
    data() {
        return {
            previewTxt : null,
            sentAtDate: null        
        }
    },
    methods: {
        getPreviewTxt() {
            const subject = this.email.subject
            const body = this.email.body
            const txt = subject + ' - ' + body
            
            this.previewTxt = utilService.getShortTxt(txt, 50) 
        },
     
    },
    created() {
      this.getPreviewTxt()
      this.sentAtDate = moment(this.email.sendAt).format('LT');
    }
   

    

}