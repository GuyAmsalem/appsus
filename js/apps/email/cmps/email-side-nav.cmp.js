

export default {
    template: `
    <section class="email-side-nav">
        <router-link to="/email/list/inbox">
            <p>Inbox</p>
        </router-link>
        
        <router-link to="/email/list/star">
            <p>Starred</p>
        </router-link>
        
        <router-link to="/email/list/sentMail">
            <p>Sent Mails</p>
        </router-link>
        
        <router-link to="/email/list/draft">
            <p>Drafts</p>
        </router-link>
    </section>
    `,
}