const  express =require("express")
const cors  = require("cors")
const app  = express()


const corsOptions = { 
    origin:'http://localhost:3000/',
    AccessControlAllowOrigin: '*',  
    origin: '*',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' 
  }
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions))
const leadRoute = require("./routes/leadRoutes.js")

console.log( process.env.OPENAI_API_KEY, "ffdg")
app.use('/api/v1',leadRoute);
module.exports= app