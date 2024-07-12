const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
const userProgressPath = path.join(__dirname, 'src', 'context', 'userProgress.js');

app.use(bodyParser.json());

app.get('/userProgress', (req, res) => {
    fs.readFile(userProgressPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.send(data);
    });
});

app.post('/userProgress', (req, res) => {
    const newData = req.body;
    const fileContent = `
const userProgress = ${JSON.stringify(newData, null, 4)};

export default userProgress;
    `;
    fs.writeFile(userProgressPath, fileContent, 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Error writing file');
        }
        res.send('User progress data saved successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
