import { utilService } from '../../../general/services/util.service.js'
import { storageService } from '../../../general/services/storage.service.js'
const USER_NOTES_KEY = 'userNotes'


var userNotes = storageService.load(USER_NOTES_KEY) || _createDemoNotes()



var inputs = [
    {
        type: 'textInput',
        info: {
            placeholder: 'What\'s on your Mind?',
            txt: ''
        }
    },
    {
        type: 'imgInput',
        info: {
            placeholder: 'Enter an Image URL',
            url: ''
        }
    },
    {
        type: 'videoInput',
        info: {
            placeholder: 'Enter a Video URL',
            url: ''
        }
    },
    {
        type: 'todosInput',
        info: {
            placeholder: 'Enter your tasks(use ",")',
            todos: ''
        }
    },
]

function formatNoteTodos(noteTodos) {
    let todos = noteTodos.info.todos.split(', ')
    noteTodos.info.todos = todos.map(todo => {
        return { txt: todo, isDone: false }
    });
    return noteTodos
}





function getUserNotes() {
    return Promise.resolve(userNotes)
}

function getInputs() {
    return Promise.resolve(inputs)
}

function getEmptyNote(type = 'noteText') {
    var emptyNote = {
        id: null,
        type,
        isPinned: false,
        info: {},
        style: {
            backgroundColor: '#ffa350'
        }
    }
    if (type === 'noteText') emptyNote.info.txt = ''
    if (type === 'noteImg') emptyNote.info.url = ''
    if (type === 'noteVideo') emptyNote.info.url = ''
    if (type === 'noteTodos') emptyNote.info.todos = ''
    return emptyNote;
}

function removeNote(noteId) {
    const idx = userNotes.findIndex(note => note.id === noteId)
    if (idx === -1) return Promise.reject('DID NOT REMOVE NOTE')
    var deletedNote = userNotes.splice(idx, 1);
    storageService.store(USER_NOTES_KEY, userNotes)
    return Promise.resolve(deletedNote[0].id)
}

function saveNote(note) {
    if (note.type === 'noteTodos' && (!Array.isArray(note.info.todos))) note = formatNoteTodos(note)
    if (note.id) return _editNote(note)
    else return _addNote(note)
}

function _addNote(note) {
    note.id = utilService.makeId()
    userNotes.unshift(note);
    storageService.store(USER_NOTES_KEY, userNotes)
    return Promise.resolve(note)
}


function _editNote(note) {
    const idx = userNotes.findIndex(currNote => currNote.id === note.id);
    userNotes.splice(idx, 1, note)
    storageService.store(USER_NOTES_KEY, userNotes)
    return Promise.resolve(note)
}



function _createDemoNotes() {
    var demoNotes = [
        {
            id: 'd4a5x',
            type: 'noteText',
            isPinned: true,
            info: {
                txt: 'Free I feel free like you promised I\d be'
            },
            style: {
                backgroundColor: '#90ccf4'
            }
        },
        {
            id: 'ZzZzZ',
            type: 'noteVideo',
            isPinned: true,
            info: {
                url: 'https://www.youtube.com/embed/aYDfwUJzYQg'
            },
            style: {
                backgroundColor: '#4caf50'
            }
        },
        {
            id: 'XxXxX',
            type: 'noteImg',
            isPinned: true,
            info: {
                url: 'https://media.giphy.com/media/PDmXIQru17Udy/giphy.gif'
            },
            style: {
                backgroundColor: '#f3d250'
            }
        },
        {
            id: 'AaAaA',
            type: 'noteTodos',
            isPinned: true,
            info: {
                todos: [
                    { txt: 'Eat', isDone: false },
                    { txt: 'Pray', isDone: false },
                    { txt: 'Love', isDone: true },
                ]
            },
            style: {
                backgroundColor: '#f78888'
            }
        },
        {
            id: 'Babab',
            type: 'noteText',
            isPinned: true,
            info: {
                txt: 'Rak TB!'
            },
            style: {
                backgroundColor: '#4caf50'
            }
        },
        {
            id: 'C3PO1',
            type: 'noteImg',
            isPinned: true,
            info: {
                url: 'https://www.myabandonware.com/media/screenshots/j/jazz-jackrabbit-2-4dm/jazz-jackrabbit-2_3.jpg'
            },
            style: {
                backgroundColor: '#ffa350'
            }
        },
        {
            id: 'R2D21',
            type: 'noteImg',
            isPinned: false,
            info: {
                url: 'https://media.giphy.com/media/l11IVhXPESQqu0z3GQ/giphy.gif'
            },
            style: {
                backgroundColor: '#f78888'
            }
        },
        {
            id: '12d2r',
            type: 'noteImg',
            isPinned: false,
            info: {
                url: 'https://media.giphy.com/media/mi6DsSSNKDbUY/giphy.gif'
            },
            style: {
                backgroundColor: '#ffa350'
            }
        },
        {
            id: 'SPura',
            type: 'noteTodos',
            isPinned: false,
            info: {
                todos: [
                    { txt: 'Elections1', isDone: true },
                    { txt: 'Elections2', isDone: true },
                    { txt: 'Elections3', isDone: true },
                ]
            },
            style: {
                backgroundColor: '#ffa350'
            }
        },
        {
            id: 'SPurs',
            type: 'noteImg',
            isPinned: false,
            info: {
                url: 'https://media.giphy.com/media/3GnCVaJAGhfJ6/giphy.gif'
            },
            style: {
                backgroundColor: '#4caf50'
            }
        },
        {
            id: 'pPZpZp',
            type: 'noteVideo',
            isPinned: false,
            info: {
                url: 'https://www.youtube.com/embed/9yVsFL6oMGE'
            },
            style: {
                backgroundColor: '#4caf50'
            }
        },
        {
            id: 'srups',
            type: 'noteImg',
            isPinned: false,
            info: {
                url: 'https://assets.bigcartel.com/product_images/217429087/Primus_Norfolk_Regular.jpg?auto=format&fit=max&h=1000&w=1000'
            },
            style: {
                backgroundColor: '#f3d250'
            }
        },
        {
            id: 'BeAtl',
            type: 'noteText',
            isPinned: false,
            info: {
                txt: `It was twenty years ago today
                Sergeant Pepper taught the band to play,
                They\'ve been going in and out of style,
                But they\'re guaranteed to raise the smile,
                So may I introduce to you,
                The act you\'ve known for all these years,
                Sergeant Pepper\'s Lonely Hearts Club Band.`
            },
            style: {
                backgroundColor: '#90ccf4'
            }
        },
        {
            id: 'parcR',
            type: 'noteImg',
            isPinned: true,
            info: {
                url: 'https://www.disccenter.co.il/content/products/prodimage_46385.jpg'
            },
            style: {
                backgroundColor: '#f78888'
            }
        },
        {
            id: 'igPOP',
            type: 'noteImg',
            isPinned: true,
            info: {
                url: 'https://i.pinimg.com/originals/fc/45/67/fc456734ac8265e654aaa4360750c488.jpg'
            },
            style: {
                backgroundColor: '#f3d250'
            }
        },
        {
            id: 'ww2DD',
            type: 'noteImg',
            isPinned: true,
            info: {
                url: 'https://wallpaperaccess.com/full/560725.jpg'
            },
            style: {
                backgroundColor: '#ffa350'
            }
        },
    ]

    

    storageService.store(USER_NOTES_KEY, demoNotes)
    return demoNotes;
}

function _createNote(txt) {
    return {
        id: utilService.makeId(),
        type: 'noteText',
        isPinned: false,
        info: {
            txt,
        },
        style: {
            backgroundColor: '#e98074'
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
