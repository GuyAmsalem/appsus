import { emailService } from '../services/email.service.js'


export default {
    template: `
    <section class="email-compose">
    <h2 class="email-compose-title">New Message</h2>
    <form class="compose-form" @submit.prevent="sendEmail">
    <div class="compose-form-row">
        <label>
            To:        
            <input class="compose-input" required type="text" v-model.trim="email.recipient"/>
        </label>    
    </div>

    <div class="compose-form-row">
        <label>
            Subject:        
            <input class="compose-input" required type="text" v-model.trim="email.subject"/>
        </label>
    </div>

    <div class="compose-form-row">
        <input class="compose-input" required type="textarea" v-model.trim="email.body"/>
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
                .then((email) => {
                    console.log(email);
                    
                    this.$router.push('/email')
                })
        }
    }
}