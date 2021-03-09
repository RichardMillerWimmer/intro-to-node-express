const express = require('express');
// console.log(express);
const app = express();
// console.log(app);

app.use(express.json());

let users = [
    {
        "id": 1,
        "first_name": "Raul",
        "last_name": "Wynter",
        "email": "rwynter0@google.com"
    },
    {
        "id": 2,
        "first_name": "Demetri",
        "last_name": "Dakin",
        "email": "ddakin1@google.com"
    },
    {
        "id": 3,
        "first_name": "Lira",
        "last_name": "Collishaw",
        "email": "lcollishaw2@google.com"
    }
]

app.get('/api/users', (req, res) => {
    console.log(req.query)

    if (req.query.theUsersId) {
        const targetIndex = users.findIndex(user => user.id === +req.query.theUsersId)
        res.status(200).send(users[targetIndex])
    } else {
        res.status(200).send(users)
    }


    //send a response with just a status
    // res.sendStatus(200);

    //send a response with a status and message
    // res.status(200).send('howdy do');
    // res.status(200).json();

    //send a response with a status and users
    res.status(200).send(users)

});

app.get('/api/users/:theUsersId', (req, res) => {
    // console.log(req.params)
    // console.log(typeof +req.params.theUsersId)

    const targetIndex = users.findIndex(user => user.id === +req.params.theUsersId)

    res.status(200).send(users[targetIndex])
});

app.listen(5050, () => console.log('server running on 5050'));



// console.log(users);


