import noteList from '../cmps/note-list.cmp.js'


export default {
    template: `
    <section>
      <h1>Keep app</h1>

      <note-list></note-list>
    </section>
    `,
    components:{
      noteList,
  }
}