import {utilService} from '../../../general/services/util.service.js'
import {storageService} from '../../../general/services/storage.service.js'

export const emailService = {
    getEmails,
    getById,
    addEmail,
    removeEmail,
    getEmptyEmail,
    sendEmail
}

const EMAIL_KEY = 'emailDB'
var emails = _createEmails()

function _createEmails() {
    var emails = storageService.load(EMAIL_KEY)
    if (!emails || !emails.length){
        emails = [_createEmail({name:'ran',emailAdrress: 'ran@gmail.com'}),
        _createEmail({name:'guy',emailAdrress: 'guy@gmail.com'})]
        storageService.store(EMAIL_KEY, emails)
    }
    return emails
}

function _createEmail(sender){
    return {
        id: utilService.makeId(),
        sender : {
            name: sender.name,
            emailAdrress: sender.emailAdrress
        },
        recipient: 'Guy',
        subject: 'Wassap brooooooooooooooooooooooooo?', 
        body: utilService.makeLorem(100), 
        isRead: false, 
        sentAt : Date.now(),
        folders: {
            inbox: true,
            star: false,
            sentMail: false,
            draft: false
        }
        
    }
}

function getEmptyEmail() {
    return {
        id: utilService.makeId(),
        sender : {
            name: 'Guy',
            emailAdrress: 'guy@gmail.com'
        },
        recipient: null,
        subject: null, 
        body: null, 
        isRead: false, 
        sentAt : null,
        folders: {
            inbox: false,
            star: false,
            sentMail: false,
            draft: false
        }
    }
}

function sendEmail(email){
    if (email.recipient === 'guy@gmail.com'){
        email.folders.inbox = true
    } else {
        email.folders.sentMail = true
    }
    email.sentAt = Date.now()
    emails.push(email)
    storageService.store(EMAIL_KEY, emails)
    return Promise.resolve(email)
    
}

function getEmails() {
    return Promise.resolve(emails)
}

function getById(emailId) {
    const email = emails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function addEmail(email) {
    email.id = utilService.makeId()
    emails.push(email);
    storageService.store(EMAIL_KEY, emails)
    return Promise.resolve(email)
} 

function removeEmail(emailId) {
    const idx = emails.findIndex(email => email.id === emailId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE EMAIL')
    const deletedMails = emails.splice(idx, 1);
    storageService.store(EMAIL_KEY, emails)
    return Promise.resolve(deletedMails[0])
}


