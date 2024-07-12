import axios from 'axios';

const saveUserProgress = async (newData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/userProgress`, newData);
        console.log('User progress data saved successfully.');
    } catch (error) {
        console.error('Error saving user progress:', error);
    }
};

export default saveUserProgress;
