import {utilService} from '../../../general/services/util.service.js'
import {storageService} from '../../../general/services/storage.service.js'
const NOTES_KEY = 'notes'


var notes = _createNotes()

function getNotes(){
    return Promise.resolve(notes)
}

function _createNotes() {
    var notes = storageService.load(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = [_createNote('Free i feel free like you promise i be'), _createNote('Total Football')]
        storageService.store(NOTES_KEY, notes)
    }
    return notes;
}

function _createNote(txt) {
    return  {
        type: "NoteText",
        isPinned: false,
        info: {
            txt,
        }
    }
}

export const keepService = {
    getNotes,
}