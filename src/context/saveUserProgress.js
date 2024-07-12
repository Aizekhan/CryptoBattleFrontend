const fs = require('fs');
const path = require('path');
const userProgressPath = path.join(__dirname, 'userProgress.js');

const saveUserProgress = (newData) => {
    const fileContent = `
import { getHeroImages } from './heroImages';

const userProgress = ${JSON.stringify(newData, null, 4)};

export default userProgress;
    `;

    fs.writeFile(userProgressPath, fileContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to userProgress.js:', err);
        } else {
            console.log('User progress data saved successfully.');
        }
    });
};

module.exports = saveUserProgress;
