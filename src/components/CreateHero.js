import React, { useState } from 'react';
import axios from 'axios';

const CreateHero = ({ userId }) => {
    const [name, setName] = useState('');

    const handleCreateHero = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/heroes/create', { userId, name });
            console.log('Hero created:', res.data);
        } catch (err) {
            console.error('Error creating hero:', err);
        }
    };

    return (
        <form onSubmit={handleCreateHero}>
            <input
                type="text"
                placeholder="Hero Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Create Hero</button>
        </form>
    );
};

export default CreateHero;