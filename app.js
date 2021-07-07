require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./api/router/user.router');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/users', userRouter);
app.get('/', (req, res) => {
	res.send("Hello fero");
});



app.listen(process.env.PORT || port, () => {
	console.log(`Server is listening on port ${port}`);
});
