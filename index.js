const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
 const courses=require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('server in running')
})
 
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const course = courses.find(cr => cr.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})