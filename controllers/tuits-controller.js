import * as tuitsDao from "../DAOs/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;

    // Adding in information needed for content to render with previous assignment
    newTuit.postedBy = {"username": "Nate Ziegler"};
    newTuit.liked = false;
    newTuit.handle = "nziegler87"
    newTuit["logo-image"] = "./images/nyp_profile_pic.png";
    newTuit["avatar-image"] = "./images/nyp_profile_pic.png";
    newTuit.stats = {"comments": 0, "retuits": 0, "likes": 0, "dislikes": 0}

    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updatedTuit);
    if ( status["modifiedCount"] === 1 ) {
        res.sendStatus(200);
    }
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    if ( status["acknowledged"] === true ){
        res.sendStatus(200);
    }
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}