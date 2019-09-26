const mongoose = require("mongoose")
const Schema = mongoose.Schema

let testSchema = new Schema({
  name: { type: String, required: true }
})

module.exports = mongoose.model("Test", testSchema)
