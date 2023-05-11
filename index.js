const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.Port || 5000;

app.use(cors())
app.use(express.json())


const users =[
    {id: 1, name: "Kamrul", email:"kamrul@gmail.com"},
    {id: 2, name: "Hasan", email:"hasan@gmail.com"},
    {id: 3, name: "Jaman", email:"jaman@gmail.com"},
]
app.get('/', (req, res) =>{
    res.send("User Server is making by me")
})

app.get('/users', (req, res) =>{
    res.send(users)
})

app.post('/users', (req, res) =>{
    console.log(req.body)
    const newUsers = req.body;
    newUsers.id = users.length + 1;
    users.push(newUsers);
    res.send(newUsers);
})

app.listen(port, () =>{
    console.log(`User Server is running on this port ${port}`)
})