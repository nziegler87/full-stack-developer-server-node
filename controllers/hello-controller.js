const helloController = (app) => {
    app.get('/hello', (req, res) => {
        res.send('Life is Good!')
    });
}
export default helloController;