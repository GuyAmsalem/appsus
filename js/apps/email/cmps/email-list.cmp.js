import emailPreview from './email-preview.cmp.js'
import emailExtended from './email-extended.cmp.js'

export default {
    template: `
    <section v-if="emails" class="emails-container">
    <div v-for="(currEmail, index) in emails" @click="extendEmail(currEmail.id)">
        <email-preview :email="currEmail"></email-preview>
        <email-extended
        v-if="selectedEmailId === currEmail.id"
        :email="currEmail"
        @click.native="closeExtendedEmail">
                </email-extended>
    </div>
    </section>
        `,
        props: ['emails'],  
        data(){
            return {
                selectedEmailId: null,
                isRead: null
            }
        },
        methods: {
            extendEmail(emailId){
                if (this.selectedEmailId === emailId) {
                    this.selectedEmailId = null
                } else {
                    this.selectedEmailId = emailId
                    this.$emit('read', emailId)
                }
            },
            closeExtendedEmail(){
                this.selectedEmailId = null
            }
        },
       
        components: {
            emailPreview,
            emailExtended
        }
    }
    
