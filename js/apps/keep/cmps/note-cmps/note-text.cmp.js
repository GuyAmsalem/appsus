import longText from '../../../../general/cmps/long-text.cmp.js'

export default {
  template: `     
          <div class="text-note-container">
              <long-text :txt="note.info.txt" :limit.number="40"></long-text>
              <div class="note-icons-container flex space-between">
                <i class="fas fa-font"></i>
                <nav class="note-features flex space-around">
                    <i class="fas fa-thumbtack" @click="$emit('pin')" 
                    v-bind:class="{ 'fas fa-thumbtack': !note.isPinned, 'fas fa-thumbtack pinned': note.isPinned }"></i>
                    <i class="fas fa-palette" @mouseover="$emit('color')" @mouseleave="$emit('uncolor')"></i>
                    <i class="fas fa-edit" @click="$emit('edit')"></i>
                    <i class="fas fa-trash-alt" @click="$emit('remove')" @mouseover="colorTrash" @mouseout="uncolorTrash"
                    v-bind:class="{ 'fas fa-trash-alt': !hoverTrash, 'fas fa-trash-alt colored': hoverTrash }"></i>
                </nav>               
              </div>
          </div>
    `,
  props: ['note'],
  data() {
    return {
      hoverTrash: false
    }
  },
  components: {
    longText,
  },
  methods: {
    colorTrash() {
      this.hoverTrash = true
    },
    uncolorTrash() {
      this.hoverTrash = false
    }
  }
}
