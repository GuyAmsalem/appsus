import {router} from './routes.js'
import mainNavBar from './cmps/main-nav-bar.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

new Vue({
    el: '#app',
    router,
    template: `
        <section class="appsus-app">
            <header>
                <main-nav-bar></main-nav-bar>
                <user-msg ></user-msg>
            </header>
            <router-view></router-view>
            <footer>
                Ran and Guy coffeerights &copy; 2020 
            </footer>
        </section>
    `,
    components:{
        mainNavBar,
        userMsg,
    }
})