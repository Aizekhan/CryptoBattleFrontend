import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HeroList = ({ userId }) => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const res = await axios.get(`/api/heroes/user/${userId}`);
                setHeroes(res.data);
            } catch (err) {
                console.error('Error fetching heroes:', err);
            }
        };

        fetchHeroes();
    }, [userId]);

    return (
        <div>
            <h2>My Heroes</h2>
            <ul>
                {heroes.map((hero) => (
                    <li key={hero._id}>{hero.name} (Level: {hero.level})</li>
                ))}
            </ul>
        </div>
    );
};

export default HeroList;