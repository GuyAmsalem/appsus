import {router} from './routes.js'
import mainNavBar from './general/cmps/main-nav-bar.cmp.js'
import userMsg from './general/cmps/user-msg.cmp.js'

new Vue({
    el: '#app',
    router,
    template: `
        <section class="appsus-app">
        <div class="screen" @click="toggleMenu"></div>
            <header>
                <main-nav-bar></main-nav-bar>
                <user-msg></user-msg>
            </header>
            <router-view></router-view>
            <footer class="main-footer flex column align-center">
                Ran and Guy coffeerights &copy; 2020 
            </footer>
        </section>
    `,
    components:{
        mainNavBar,
        userMsg,
    },
    methods: {
       toggleMenu(){
        document.body.classList.toggle('menu-open')
       }
    }
})