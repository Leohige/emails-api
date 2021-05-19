const validator = require("validator")
const Email = require("../models/email")

function validate(email) {
    let errors = []

    if (!validator.isEmail(email.address || "")) {
        errors.push("Endereço de email inválido.")
    }

    return errors
}

async function validateCreate(email) {
    let errors = validate(email)

    const duplicate = await Email.getEmailByAddress(email.address)
    if (duplicate) {
        errors.push("Endereço de email já existente.")
    }

    return errors
}

async function validateUpdate(email, id) {
    let errors = validate(email)

    const duplicate = await Email.getEmailByAddress(email.address)
    if (duplicate && duplicate._id != id) {
        errors.push("Endereço de email já existente.")
    }

    return errors
}

module.exports = {
    validateCreate,
    validateUpdate
}
