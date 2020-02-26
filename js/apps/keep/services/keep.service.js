import {utilService} from '../../../general/services/util.service.js'
import {storageService} from '../../../general/services/storage.service.js'
const USER_NOTES_KEY = 'userNotes'


var userNotes = _createNotes()

var inputs = [
    {
        type:'noteText',
        info: {
            placeholder: 'Whats on your Mind?',
            txt: ''
        }
    },
]

function saveNote(note){
  if(note.id) return
  else return _addNote(note)
}

function _addNote(note){
    note.id = utilService.makeId()
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

function getEmptyNote(){
    var emptyNote =  {
        type: '',
        isPinned: false,
        info: {}
    }
    return emptyNote;
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
        type: 'NoteText',
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
    saveNote
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