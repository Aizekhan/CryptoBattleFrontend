.top-bar {
    display: flex;
    flex-direction: column;
    background-color: #333;
    color: white;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.user-info {
    display: flex;
    align-items: center;
}

.user-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.icon-bar {
    display: flex;
    align-items: center;
    gap: 10px;
}

.binance-icon, .wallet-icon {
    width: 24px;
    height: 24px;
}

.stats-bar {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
    background-color: #444;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
}

.value {
    font-weight: bold;
}
