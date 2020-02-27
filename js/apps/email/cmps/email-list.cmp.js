import emailPreview from './email-preview.cmp.js'
import emailExtended from './email-extended.cmp.js'

export default {
    template: `
    <section v-if="emails" class="emails-container">
    <div v-for="currEmail in emails" @click="extendEmail(currEmail.id)">
        <email-preview :email="currEmail"></email-preview>
        <email-extended
        v-if="selectedEmailId === currEmail.id"
        :email="currEmail"
        @click.native="closeExtendedEmail">
                </email-extended>
    </div>
    </section>
        `,
        data(){
            return {
                selectedEmailId: null
            }
        },
        methods: {
            extendEmail(emailId){
                if (this.selectedEmailId === emailId) {
                    this.selectedEmailId = null
                } else {
                    this.selectedEmailId = emailId
                }
            },
            closeExtendedEmail(){
                this.selectedEmailId = null
            }
        },
        props:['emails'],
        components: {
            emailPreview,
            emailExtended
        }
    }
    
    //TODO: close the extended after another click
    //      make delete and details buttons 
    //      attention to the txt length
    
