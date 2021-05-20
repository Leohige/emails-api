const emailPayload = ({ _id, address, created_at, updated_at }) => ({
    _id,
    address,
    created_at,
    updated_at
})

module.exports = emailPayload
