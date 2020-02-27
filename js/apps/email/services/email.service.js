import {utilService} from '../../../general/services/util.service.js'
import {storageService} from '../../../general/services/storage.service.js'
const EMAIL_KEY = 'emailDB'

var emails = _createEmails()

function _createEmails() {
    var emails = storageService.load(EMAIL_KEY)
    if (!emails || !emails.length){
        emails = [_createEmail('ran'), _createEmail('guy')]
        storageService.store(EMAIL_KEY, emails)
    }
    return emails
}

function _createEmail(sender){
    return {
        id: utilService.makeId(),
        sender,
        subject: 'Wassap brooooooooooooooooooooooooo?', 
        body: utilService.makeLorem(100), 
        isRead: false, 
        sentAt : 1551133930594,
        folders: {
            inbox: true,
            starred: false,
            sentMails: false,
            drafts: false
        }
        
    }
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

export const emailService = {
    getEmails,
    getById,
    addEmail,
    removeEmail
}

