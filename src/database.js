const Datastore = require("nedb");
const emails = new Datastore({ filename: "emails.db", autoload: true });

module.exports = {
    emails,
}
