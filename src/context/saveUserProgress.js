const axios = require('axios');

const saveUserProgress = (newData) => {
    axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/userProgress`, newData)
        .then((response) => {
            // Видалено 'response' як невикористовувану змінну
            console.log('User progress data saved successfully.');
        })
        .catch((error) => {
            console.error('Error saving user progress:', error);
        });
};

export default saveUserProgress;
