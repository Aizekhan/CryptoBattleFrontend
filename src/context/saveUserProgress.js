const axios = require('axios');

const saveUserProgress = (newData) => {
    axios
        .post('http://localhost:3001/userProgress', newData)
        .then(() => {
            console.log('User progress data saved successfully.');
        })
        .catch((error) => {
            console.error('Error saving user progress:', error);
        });
};

export default saveUserProgress;
