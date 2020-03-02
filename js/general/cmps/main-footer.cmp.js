export default {
    template:`
        <footer class="main-footer flex col align-center">
            <div class="logo">AppSus</div>
            <div>
                <small class="footer-copyrights">Ran and Guy coffeerights &copy; 2020</small>
            </div>
        </footer>
    `,
   methods: {
       toggleMenu(){
         document.body.classList.toggle('menu-open')
       }
   }
}
