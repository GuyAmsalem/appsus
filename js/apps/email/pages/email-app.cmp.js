import { eventBus, EVENT_REMOVE_EMAIL } from '../../../general/services/event-bus.service.js'
import emailSideNav from '../cmps/email-side-nav.cmp.js'
import { emailService } from '../services/email.service.js'


export default {
    template: `
    <section class="email-app-container">
      <div class="email-side-nav-container"> 
        <router-link to="/email/compose">
            <button>Compose</button>
        </router-link>
        <email-side-nav></email-side-nav>
      </div>

      <router-view></router-view>    
      
    </section>
    `,
    data() {
        return {
            filterBy: null
        }
    },
    created() {
        eventBus.$on(EVENT_REMOVE_EMAIL, this.removeEmail)
    },
    methods: {
        removeEmail(emailId) {
            emailService.removeEmail(emailId)
                .then(mail => {
                    console.log(mail.id, 'deleted')
                })
            // .then(()=>{
            //     console.log(`Car ${emailId} deleted succesfully`);
            //     eventBus.$emit(EVENT_SHOW_MSG, {
            //         txt: `Car ${emailId} deleted succesfully`,
            //         type: 'success'
            //     })
            // })
        }
    },

    components: {
        emailSideNav
    }


}