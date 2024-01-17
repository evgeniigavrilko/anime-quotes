async function getRandomQuote() {
  const authorElement = document.getElementById('author');
  const animeElement = document.getElementById('anime');
  const quoteElement = document.getElementById('quote');

  try {
    const response = await fetch('https://animechan.xyz/api/random');
    const data = await response.json();
    authorElement.textContent = `${data.character}`;
    animeElement.textContent = `&#171;${data.anime}&#187;`;
    quoteElement.textContent = `"${data.quote}"`;
  } catch (error) {
    authorElement.textContent = 'Error';
    animeElement.textContent = 'Error';
    quoteElement.textContent = 'Something went wrong. Please try again later.';
  }
}