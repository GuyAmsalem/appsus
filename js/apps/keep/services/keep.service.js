import {utilService} from '../../../general/services/util.service.js'
import {storageService} from '../../../general/services/storage.service.js'
const USER_NOTES_KEY = 'userNotes'


var userNotes = _createNotes()

var inputs = [
    {   
        type:'textInput',
        info: {
            placeholder: 'What\'s on your Mind?',
            txt: ''
        }
    },
    {
        type:'imgInput',
        info: {
            placeholder: 'Enter an Image URL',
            url: ''
        }
    },
    {
        type:'videoInput',
        info: {
            placeholder: 'Enter a Video URL',
            url: ''
        }
    },
]

function saveNote(note){
  if(note.id) return
  else return _addNote(note)
}

function _addNote(note){
    note.id = utilService.makeId()
    // if(note.type === 'noteText') note.info.txt = val
    userNotes.unshift(note);
    storageService.store(USER_NOTES_KEY, userNotes)
    return Promise.resolve(note)
}

function getUserNotes(){
    return Promise.resolve(userNotes)
}

function getInputs(){
    return Promise.resolve(inputs)
}

function getEmptyNote(type = 'noteText'){
    var emptyNote =  {
        id: null,
        type,
        isPinned: false,
        info: {}
    }
    if(type === 'noteText') emptyNote.info.txt = ''
    if(type === 'noteImg') emptyNote.info.url = ''
    if(type === 'noteVideo') emptyNote.info.url = ''
    return emptyNote;
}

function removeNote(noteId){
    const idx = userNotes.findIndex(note => note.id === noteId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE NOTE')
    var deletedNote = userNotes.splice(idx, 1);
    storageService.store(USER_NOTES_KEY, userNotes)
    return Promise.resolve(deletedNote[0].id)
}

function _createNotes() {
    var userNotes = storageService.load(USER_NOTES_KEY)
    if (!userNotes || !userNotes.length) {
        userNotes = [_createNote('Free i feel free like you promise i be'), _createNote('Total Football')]
        storageService.store(USER_NOTES_KEY, userNotes)
    }
    return userNotes;
}

function _createNote(txt) {
    return  {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: false,
        info: {
            txt,
        }
    }
}

export const keepService = {
    getUserNotes,
    getInputs,
    getEmptyNote,
    saveNote,
    removeNote
}


// {
//     type: "NoteTodos",
//     info: {
//       label: "How was it:",
//       todos: [
//         { txt: "Do that", doneAt: null },
//         { txt: "Do this", doneAt: 187111111 }
//       ]
//     }
//   }


// var notes = [
//     {
//       type: "NoteText",
//       isPinned: true,
//       info: {
//         txt: "Fullstack Me Baby!"
//       }
//     },
//     {
//       type: "NoteImg",
//       info: {
//         url: "http://some-img/me",
//         title: "Me playing Mi"
//       },
//       style: {
//         backgroundColor: "#00d"
//       }
//     },
   
// ];