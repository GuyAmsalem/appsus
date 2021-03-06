import {utilService} from '../../../general/services/util.service.js'
import {storageService} from '../../../general/services/storage.service.js'

export const emailService = {
    getEmails,
    getById,
    addEmail,
    removeEmail,
    getEmptyEmail,
    sendEmail,
    updateEmailRead
}

const EMAIL_KEY = 'emailDB'
var emailDB = storageService.load(EMAIL_KEY) || _createEmails()

function _createEmails() {
        var samplesEmails = []
        for (let i = 0; i < 25; i++) {
            let senderName = utilService.getRandomName()
            let recipientName = (Math.random() > 0.6)? 'me' : utilService.getRandomName()
            samplesEmails.push(_createEmail(senderName, recipientName))
        }
        storageService.store(EMAIL_KEY, samplesEmails)
    return samplesEmails
}

function _createEmail(senderName ,recipientName){
    return {
        id: utilService.makeId(),
        sender : {
            name: senderName,
            emailAdrress: senderName + '@gmail.com'
        },
        recipient: recipientName,
        subject: utilService.makeLorem(30), 
        body: utilService.makeLorem(150), 
        isRead: false, 
        sentAt : Date.now(),
        folders: {
            inbox: (recipientName === 'me')? true : false,
            star: false,
            sentMail: (senderName === 'Guy')? true : false,
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

function updateEmailRead(emailId){
    const emailIdx = emailDB.findIndex(email => email.id === emailId)
    const emailCopy = JSON.parse(JSON.stringify(emailDB[emailIdx]))
    emailCopy.isRead = true
    emailDB.splice(emailIdx, 1 , emailCopy)
    storageService.store(EMAIL_KEY, emailDB)
}

function sendEmail(email){
    if (email.recipient === 'guy@gmail.com' ||
    email.recipient === 'me'){
        email.folders.inbox = true
    } else {
        email.folders.sentMail = true
        email.isRead = true
    }
    email.sentAt = Date.now()
    emailDB.push(email)
    storageService.store(EMAIL_KEY, emailDB)
    return Promise.resolve(email)
    
}

function getEmails() {
    return Promise.resolve(emailDB)
}

function getById(emailId) {
    const email = emailDB.find(email => email.id === emailId)
    return Promise.resolve(email)
}

function addEmail(email) {
    email.id = utilService.makeId()
    emailDB.push(email);
    storageService.store(EMAIL_KEY, emailDB)
    return Promise.resolve(email)
} 

function removeEmail(emailId) {
    const idx = emailDB.findIndex(email => email.id === emailId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE EMAIL')
    const deletedMails = emailDB.splice(idx, 1);
    storageService.store(EMAIL_KEY, emailDB)
    return Promise.resolve(deletedMails[0])
}


