const validator = require("validator")
const Email = require("../models/email")

async function validateCreate(email) {
    let errors = []

    if (!validator.isEmail(email.address || "")) {
        errors.push("Endereço de email inválido.")
    }

    const duplicate = await Email.getEmailByAddress(email.address)
    if (duplicate) {
        errors.push("Endereço de email já existente.")
    }

    return errors
}

async function validateUpdate(email, id) {
    let errors = []

    if (validator.isEmpty(id)) {
        errors.push("Email inválido.")
    }

    if (!validator.isEmail(email.address || "")) {
        errors.push("Endereço de email inválido.")
    }

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
