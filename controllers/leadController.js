

const leadModel = require("../models/lead.js")
const   OpenAIApi  = require("openai");

  const openai = new OpenAIApi({  apiKey: "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"});

exports.addLead= async (req, res) => {
    try {
        let {name, sale_person,customer, status, description } = req.body
        let leadObj  = {lead_name:name, sale_person:sale_person , customer: customer, status, messages:[], schedules:[],description}
        const createdLead =  await leadModel.create(leadObj)
        if (createdLead) {
            res.status(201).json({
                status: 1,
                message: "Lead Created",
                data: createdLead
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


exports.getAllLead = async(req,res)=>{
    try{

        let leads  = await leadModel.find({}).populate("customer").populate("sale_person")
        res.status(200).json({
            status: 1,
            message: "Lead generated!",
            leads
        })
    }catch(error){
        res.status(400).json({
            status: 0,
            message: error.message,
        })
    }
}


exports.addNewMessage = async(req,res) =>{
    try{

        let lead  = await leadModel.findOne({_id: req.body.id})
        lead.messages.push({
            sender: req.body.sender,
            timestamp: new Date(),
            body: req.body.message,message_type

          });
          
          await lead.save();
          res.status(200).json({
            status: 1,
            message: "Message Added!",
            lead
        })
    }catch(error){
        res.status(400).json({
            status: 0,
            message: error.message,
        })
    }
}


exports.runCompletion = async (req,res) =>{
    try{
    const completion = await openai.chat.completions.create({
      model: "text-davinci-003",
      prompt: "How are you today?",
    });
res.status(200).json({
    status:1,
    data: completion
})
    }
    catch(error){
        res.status(400).json({
            status: 0,
            message: error.message,
        })
    }
   
    }