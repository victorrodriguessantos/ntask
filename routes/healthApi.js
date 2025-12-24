module.exports = app => {
    app.get("/", (req, res) => res.json(
    {
        status: 200,
        message: "NTask API - online"
    }
)
);
}