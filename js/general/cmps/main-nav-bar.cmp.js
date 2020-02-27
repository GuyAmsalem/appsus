export default {
    template:`
        <nav class="main-nav-bar flex space-between align-center">
            <div class="logo">AppSus</div>

                <div class="links-nav flex">
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
                </div>
        </nav>
    `,
   
}