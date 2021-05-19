const Email = require("../models/email")
const EmailValidator = require("../validators/email.validator")
const EmailPayload = require("../payloads/email.payload")

async function index(_, res, _){
    const emails = await Email.getAllEmails()
    res.status(200).json(
        emails.map((email) => { 
            return EmailPayload(email) 
        })
    )
}

async function show(req, res, _){
    const email = await Email.getEmailById(req.params.id)

    if (email) {
        res.status(200).json(EmailPayload(email))
    } else {
        res.status(404).json({ error: "Email não encontrado." })
    }
}

async function create(req, res, _){
    const errors = await EmailValidator.validateCreate(req.body)
    if (errors.length > 0) {
        res.status(422).json(errors)
        return
    }

    const email =  await Email.createEmail(req.body, req.ip)
    res.status(201).json(EmailPayload(email))
}

async function update(req, res, _){
    const foundEmail = await Email.getEmailById(req.params.id)
    if (!foundEmail) {
        res.status(404).json({ error: "Email não encontrado." })
        return
    }

    const errors = await EmailValidator.validateUpdate(req.body, req.params.id)
    if (errors.length > 0) {
        res.status(422).json(errors)
        return
    }

    const email =  await Email.updateEmail(req.body, req.ip, req.params.id)
    res.status(201).json(EmailPayload(email))
}

async function destroy(req, res, _){
    const numDestroyed = await Email.destroyEmail(req.params.id)

    if (numDestroyed > 0) {
        res.status(204).json()
    } else {
        res.status(404).json({ error: "Email não encontrado." })
    }    
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}
