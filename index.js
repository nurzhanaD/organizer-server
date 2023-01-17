const express = require("express");
const PORT = process.env.PORT || 5100;

const userRouter = require("./routes/user.routes.js");

const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => console.log(`SERVER is running on port ${PORT}`));