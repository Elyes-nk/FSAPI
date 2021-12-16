const app = require("./services/server.service");
const mongoose = require('./services/mongoose.service');

mongoose.dbConnect();
app.start();

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

//allow app use json from the body that get passed up to it 
app.use(express.json());

//========== Routes =================
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
//===================================
