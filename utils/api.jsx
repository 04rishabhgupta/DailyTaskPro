export async function getMotivationalQuote() {
    try {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;
        return randomQuote;
    } catch (error) {
        console.log('Error fetching quote:', error);
        return 'Stay positive and keep moving forward!';
    }
}
