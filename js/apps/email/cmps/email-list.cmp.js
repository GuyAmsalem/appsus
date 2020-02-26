import emailPreview from './email-preview.cmp.js'

export default {
    template: `
    <section class="emails-container">
    <div v-for="currEmail in emails">
        <email-preview :email="currEmail"></email-preview>
        </div>
        </section>
        `,
        data(){
            return {
                selectedEmailId: null,
            }
        },
        props:['emails'],
        components: {
            emailPreview
        }
    }
    
    //TODO: add cmp with 'if the email is clicked condution' in the for loop 
    

    