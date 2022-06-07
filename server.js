const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(cors());
const port = process.env.PORT || 5000
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", require("./routes/Translation"));
app.use("/api", require("./routes/Joke"));
app.listen(port, () => {
    console.log(`Backend is live at http://localhost:${port}`);
})