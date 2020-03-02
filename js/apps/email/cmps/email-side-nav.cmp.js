

export default {
    template: `
    <section class="email-side-nav" >
        <button @click="isNavOpen = !isNavOpen" class="email-burger-btn">
            <i class="far fa-caret-square-down"></i>
        </button>
        <section class="email-side-nav-links" :class="navClass">
            <div @click="isNavOpen = !isNavOpen">
                <router-link class="email-nav-link" to="/email/list/inbox">
                    <p>Inbox <span>{{unread}}</span></p>
                </router-link>
            </div>
            <div @click="isNavOpen = !isNavOpen">
                <router-link class="email-nav-link" to="/email/list/star">
                    <p>Starred</p>
                </router-link>
            </div>
                
            <div @click="isNavOpen = !isNavOpen">
                <router-link class="email-nav-link" to="/email/list/sentMail">
                    <p>Sent Mails</p>
                </router-link>
            </div>
                
            <div @click="isNavOpen = !isNavOpen">
                <router-link class="email-nav-link" to="/email/list/draft">
                    <p>Drafts</p>
                </router-link>
            </div>   
        </section>
    </section>
    `,
    data() {
        return {
            isNavOpen: false
        }
    },
    computed: {
        navClass() {
            return (this.isNavOpen)? 'email-side-nav-open' : ''
        }
    },
    props: ['unread']
}