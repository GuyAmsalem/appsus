import home from './general/pages/home.cmp.js'
import about from './general/pages/about.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailCompose from './apps/email/pages/email-compose.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'
import emailMainPage from './apps/email/pages/email-main-page.js'

const routes = [
    { path: '/', component: home },
    { path: '/keep', component: keepApp },
    {
        path: '/email', component: emailApp,
        children: [
            { path: '', component: emailMainPage },
            { path: 'details/:id', component: emailDetails },
            { path: 'compose', component: emailCompose },
            { path: 'list/:filterBy?', component: emailMainPage },
        ]
    },
    { path: '/about', component: about },


]

export const router = new VueRouter({ routes })





