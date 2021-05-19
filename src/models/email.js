const db = require("../database")

async function getAllEmails() {
    const emails = await new Promise((resolve, reject) => {
        db.emails.find({}, function (err, emails) {
            if (err) return reject(err)
            resolve(emails)
        })
    })

    return emails
}

async function getEmailById(id) {
    const email = await new Promise((resolve, reject) => {
        db.emails.findOne({ _id: id }, function (err, email) {
            if (err) return reject(err)
            resolve(email)
        })
    })

    return email
}

async function getEmailByAddress(address) {
    const email = await new Promise((resolve, reject) => {
        db.emails.findOne({ address: address }, function (err, email) {
            if (err) return reject(err)
            resolve(email)
        })
    })

    return email
}

async function createEmail(body, ip) {
    const newEmail = {
        address: body.address,
        created_by: ip,
        updated_by: null,
        created_at: new Date(),
        updated_at: null
    }

    const email = await new Promise((resolve, reject) => {
        db.emails.insert(newEmail, function (err, email) {
            if (err) return reject(err)
            resolve(email)
        })
    })

    return email
}

async function updateEmail(body, ip, id) {
    const updateEmail = {
        address: body.address,
        updated_by: ip,
        updated_at: new Date()
    }

    const email = await new Promise((resolve, reject) => {
        db.emails.update({ _id: id }, { $set: updateEmail }, function (err, numReplaced) {
            if (err) return reject(err)
            resolve(getEmailById(id))
        })
    })

    return email
}

async function destroyEmail(id) {
    const numDestroyed = await new Promise((resolve, reject) => {
        db.emails.remove({ _id: id }, function (err, numDestroyed) {
            if (err) return reject(err)
            resolve(numDestroyed)
        })
    })

    return numDestroyed
}

module.exports = {
    getAllEmails,
    getEmailById,
    getEmailByAddress,
    createEmail,
    updateEmail,
    destroyEmail
}
