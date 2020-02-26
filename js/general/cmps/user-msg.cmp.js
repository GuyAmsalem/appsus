import { eventBus } from '../services/event-bus.service.js'
export default {
    template: `
        <section v-if="isShown"  class="msg-container">
                <div class="msg-main">{{msg.txt}}</div>
        </section>
    `,
    data() {
        return {
            isShown: false,
            msg: {}
        }
    },
    created() {
        eventBus.$on('msg', (msg) => {
            this.msg = msg
            this.isShown = true
            setTimeout(() => {
                this.isShown = false
            }, 2000);
        })
    }
}