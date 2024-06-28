const Card = ({ card, onUpgrade }) => {
    const { userStats, setUserStats } = useUserStats();

    const prerequisitesMet = card.prerequisites.every(prereq => {
        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
        return prereqCard && prereqCard.level >= prereq.level;
    });

    const hasEnoughBalance = userStats.balance >= card.upgradeCost;

    const canUpgrade = prerequisitesMet && hasEnoughBalance;

    const handleUpgrade = () => {
        if (canUpgrade) {
            setUserStats(prevStats => ({
                ...prevStats,
                balance: prevStats.balance - card.upgradeCost,
                mines: prevStats.mines.map(c => 
                    c.id === card.id ? { ...c, level: c.level + 1 } : c
                )
            }));
        }
    };

    let buttonContent = 'Upgrade';
    let buttonClass = '';

    if (!prerequisitesMet) {
        buttonContent = (
            <>
                <img src={lockIcon} alt="Locked" />
                <div className="prerequisites">
                    {card.prerequisites.map(prereq => {
                        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
                        return (
                            <p key={prereq.id}>
                                {prereqCard ? prereqCard.name : `Card ${prereq.id}`} Level {prereq.level} required
                            </p>
                        );
                    })}
                </div>
            </>
        );
        buttonClass = 'locked';
    } else if (!hasEnoughBalance) {
        buttonClass = 'no-balance';
    }

    return (
        <div className="card">
            <img src={card.img} alt={card.name} className="card-img" />
            <h3>{card.name}</h3>
            <p>Level: {card.level}</p>
            <p>Effect: {card.effect}</p>
            <button 
                onClick={handleUpgrade}
                disabled={!canUpgrade}
                className={buttonClass}
            >
                {buttonContent} ({card.upgradeCost})
            </button>
        </div>
    );
};
