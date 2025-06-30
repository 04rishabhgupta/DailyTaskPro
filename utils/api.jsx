export async function getMotivationalQuote() {
    try {
        const response = await fetch('https://zenquotes.io/api/quotes/');
        const data = await response.json();
        const totalQuotes = data.length;
        const randomIndex = Math.floor(Math.random() * totalQuotes);
        const randomQuote = data[randomIndex].text;
        return randomQuote;
    } catch (error) {
        console.log('Error fetching quote:', error);
        return 'Stay positive!';
    }
}
