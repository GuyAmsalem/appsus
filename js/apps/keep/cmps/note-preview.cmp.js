export default {
    template: `
        <div class="user-note-container">
            <h1>{{note.info.txt}}</h1>
            
            <button >x</button>      
        </div>
    `,
    props: ['note'],
    // methods: {
    //     removeNote(ev){
    //         ev.stopPropagation
    //     }
    // }
}