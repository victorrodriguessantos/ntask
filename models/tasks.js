module.exports = app => {
    app.get("/tasks", (req, res) => {
        res.send("Teste rota ddsd")
    }
);
}