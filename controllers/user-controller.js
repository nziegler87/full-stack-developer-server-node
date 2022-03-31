import users from './users/users.js';

const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    const new_users = users.filter( usr => usr._id !== userId );
    res.sendStatus(200);
}

const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = ( new Date() ).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const findUsersByType = (type) => {
    return users.filter(user => user.type === type);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if ( type ) {
        res.json(findUsersByType(type));
        return;
    }
    res.json(users);
}

export default userController;