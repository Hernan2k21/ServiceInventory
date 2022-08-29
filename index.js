const express = require("express"); 
const {port} = require('./config/app.config')['server']
const {logError, sendError, notFound} = require('./src/Middlewares')
const setupLogger = require('./src/Helpers/setupLogger')
const initDatabase = require('./src/Helpers/database')
const app = express(); 


app.use(
    express.json({
        limit: '50mb',
    })
);

setupLogger(app)
initDatabase()
const routes = require('./src/Routes');

app.get("/health", async (req, res) => { 
    res.status(200).send('ok')
}); 

app.use('/v1', routes)
app.use(logError)
app.use(sendError)
app.use(notFound)


app.listen(port, () => { 
    console.log(`API is listening on port ${port}`); 
});
