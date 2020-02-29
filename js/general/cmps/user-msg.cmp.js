import { eventBus } from '../services/event-bus.service.js'
export default {
    template: `
        <transition name="fade">
            <section v-if="isShown"  class="msg-container" :class="msg.type">
                    <div class="msg-main">{{msg.txt}}</div>
            </section>
        </transition>
    `,
    data() {
        return {
            isShown: false,
            msg: {}
        }
    },
    created() {
        eventBus.$on('showMsg', (msg) => {
            this.msg = msg
            this.isShown = true
            setTimeout(() => {
                this.isShown = false
            }, 2000);
        })
    }
}