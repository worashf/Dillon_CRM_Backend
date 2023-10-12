

const customerModel = require("../models/customer.js")



exports.addCustomer = async (req, res) => {
    try {
        let { fullName, phone, email, city, address, companyName, companyWebsite} = req.body
        let customerObj ={full_name: fullName,phone,email, city, address, company_name: companyName, company_website: companyWebsite }
        const createdCustomer = customerModel.create(customerObj)
        if (createdCustomer) {
            res.status(201).json({
                status: 1,
                message: "Customer Created",
                customers: createdCustomer
            })
        }

    }
    catch (error) {
        res.status(400).json({
            status: 0,
            message: error.message,
        })
    }
}


exports.getAllCustomer = async(req,res)=>{
    try{

        let customers  = await customerModel.find({})
        res.status(200).json({
            status: 1,
            message: "Customer generated!",
            customers: customers
        })
    }catch(error){
        res.status(400).json({
            status: 0,
            message: error.message,
        })
    }
}
