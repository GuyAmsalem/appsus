import { emailService } from '../services/email.service.js'


export default {
    template: `
    <section class="email-compose">
    <h2>New Message</h2>
    <form @submit.prevent="sendEmail">
    <div class="form-row">
        <label>
            To:        
            <input required type="text" v-model.trim="email.recipient"/>
        </label>    
    </div>

    <div class="form-row">
        <label>
            Subject:        
            <input required type="text" v-model.trim="email.subject"/>
        </label>
    </div>

    <div class="form-row">
        <input required type="textarea" v-model.trim="email.body"/>
    </div>
        
        <button type="submit">Send</button>
        <router-link to="/email/list/inbox">
            <button>Delete/Back</button>
        </router-link>
    </form>

</section>
    `,
    data() {
        return {
            email: emailService.getEmptyEmail()
        }
    },
    methods: {
        sendEmail(){
            emailService.sendEmail(this.email)
                .then(() => {
                    this.$router.push('/email')
                })
        }
    }
}