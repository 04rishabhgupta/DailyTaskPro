export const getMotivationalQuote = async () => {
    try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex].text;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'Stay positive!';
    }
};
