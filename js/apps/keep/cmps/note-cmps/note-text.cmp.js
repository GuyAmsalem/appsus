
export default {
    template: `     
          <div>
              <h2>{{note.info.txt}}</h2>
              <div class="note-icons-container flex space-between">
                <i class="fas fa-font"></i>
                <nav class="note-features flex space-around">
                    <i class="fas fa-thumbtack"></i>
                    <i class="fas fa-palette"></i>
                    <i class="fas fa-edit" @click="$emit('edit')"></i>
                    <i class="fas fa-trash-alt" @click="$emit('remove')"></i>
                </nav>
                <div>
                 <i class="fas fa-brush"></i>  
                </div>    
              </div>
          </div>
    `,
    props: ['note'],
}