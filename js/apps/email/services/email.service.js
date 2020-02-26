import {utilService} from '../../../general/services/util.service.js'
import {storageService} from '../../../general/services/storage.service.js'
const KEY = 'emailDB'

var emails = _createEmails()

function _createEmails() {
    var emails = storageService.load(KEY)
    if (!emails || !emails.length){
        emails = [_createEmail(), _createEmail()]
        storageService.store(KEY, emails)
    }
    return emails
}

function _createEmail(){
    return {
        id: utilService.makeId(),
        subject: 'Wassap?', 
        body: 'Pick up!', 
        isRead: false, 
        sentAt : 1551133930594
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
    storageService.store(KEY, emails)
    return Promise.resolve(email)
} 

function removeEmail(emailId) {
    const idx = emails.findIndex(email => email.id === emailId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE EMAIL')
    emails.splice(idx, 1);
    storageService.store(KEY, emails)
    return Promise.resolve('EMAIL REMOVED')
}

export const emailService = {
    getEmails,
    getById,
    addEmail,
    removeEmail
}

