const express = require("express");
const PORT = process.env.PORT || 5100;

const userRouter = require("./routes/user.routes.js");
const goalRouter = require("./routes/goal.routes.js");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/api', userRouter);
app.use('/api', goalRouter);

app.listen(PORT, () => console.log(`SERVER is running on port ${PORT}`));