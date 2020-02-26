export default {
    template: `
        <div class="note-container">
            <h1>{{note.type}}</h1>
            <h1>{{note.isPinned}}</h1>
            <h1>{{note.info}}</h1>      
        </div>
    `,
    props: ['note']
}