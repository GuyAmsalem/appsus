import longText from '../../../../general/cmps/long-text.cmp.js'

export default {
    template: `     
          <div>
              <long-text :txt="note.info.txt" :limit.number="40"></long-text>
              <div class="note-icons-container flex space-between">
                <i class="fas fa-font"></i>
                <nav class="note-features flex space-around">
                    <i class="fas fa-thumbtack" @click="$emit('pin')"></i>
                    <i class="fas fa-palette" @click="$emit('color')"></i>
                    <i class="fas fa-edit" @click="$emit('edit')"></i>
                    <i class="fas fa-trash-alt" @click="$emit('remove')"></i>
                </nav>               
              </div>
          </div>
    `,
    props: ['note'],
    components:{
        longText,
    }
}
