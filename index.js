const { app } = require("./src/config.js")

app.listen(process.env.PORT, () => console.log('server is running'))