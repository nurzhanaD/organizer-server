const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5100;

const userRouter = require("./routes/user.routes.js");
const goalRouter = require("./routes/goal.routes.js");
const noteRouter = require("./routes/note.routes.js");
const toDoRouter = require("./routes/to-do.routes.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', userRouter);
app.use('/api', goalRouter);
app.use('/api', noteRouter);
app.use('/api', toDoRouter);

app.listen(PORT, () => console.log(`SERVER is running on port ${PORT}`));