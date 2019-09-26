const express = require("express")
const Test = require("../schemas/Test")

const router = express.Router()

router.get("/api/tests", async (req, res) => {
  Test.find({})
    .exec()
    .then(data => {
      res.status(200).send(data)
    })
})

module.exports = router
