import hero1FullImage from '../assets/images/Heroes/hero1_full.png';
import hero1Avatar from '../assets/images/Heroes/hero1_avatar.png';
import hero2FullImage from '../assets/images/Heroes/hero2_full.png';
import hero2Avatar from '../assets/images/Heroes/hero2_avatar.png';
import bot1FullImage from '../assets/images/Heroes/bot_full.png';
import bot1Avatar from '../assets/images/Heroes/bot_avatar.png';

const defaultImages = {
    hero1: {
        full: hero1FullImage,
        avatar: hero1Avatar
    },
    hero2: {
        full: hero2FullImage,
        avatar: hero2Avatar
    },
    bot1: {
        full: bot1FullImage,
        avatar: bot1Avatar
    }
};

export const getHeroImages = (heroId, customImages = null) => {
    if (customImages && customImages[heroId]) {
        return customImages[heroId];
    }
    return defaultImages[heroId] || defaultImages.bot1;
};

export default defaultImages;
