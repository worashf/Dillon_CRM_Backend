const express = require("express")
const router = express.Router()
  

const {createUser}= require("../controllers/userController")
const {addCustomer,getAllCustomer } = require("../controllers/customerController")
const {addLead, getAllLead,addNewMessage, } = require("../controllers/leadController")

 router.route('/users').post(createUser)
 router.route('/customers').post(addCustomer)
 router.route('/customers').get(getAllCustomer)
 router.route('/leads').post(addLead)
 router.route('/leads').get(getAllLead)
 router.route('/leads').put(addNewMessage)


 module.exports = router