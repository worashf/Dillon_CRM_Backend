const dotenv = require("dotenv")
const app = require("./app")
const connectDatabase = require('./configs/dbconfig.js');

dotenv.config({ path: "configs/config.env" })

connectDatabase();
const server = app.listen(process.env.APP_PORT, () => {
    console.log(
        `Server started at port ${process.env.APP_PORT} `
      );
})