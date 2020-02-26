export default {
    template:`
        <nav class="navbar">
            <div class="logo">AppSus</div>
            <router-link to="/" exact>
                Home
            </router-link>
            |
            <router-link to="/keep" exact>
                Keep
            </router-link>
            |
            <router-link to="/email" exact>
                Email
            </router-link>
            |
            <router-link to="/book">
                Books
            </router-link>
            |
            <router-link to="/about">
                About
            </router-link>
        </nav>
    `,
   
}