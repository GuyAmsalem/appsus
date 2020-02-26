import home from './pages/home.cmp.js'
import about from './pages/about.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'


const routes = [
    { path: '/', component: home },
    { path: '/keep', component: keepApp },
    { path: '/email', component: emailApp },
    { path: '/about', component: about },


]

export const router = new VueRouter({routes})