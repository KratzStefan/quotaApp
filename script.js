document.getElementById("new-quote").addEventListener("click", getQuote);

function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("quote").innerText = `"${data.quote}"`;
      document.getElementById("author").innerText = `- ${data.author}`;
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen des Zitats:", error);
      document.getElementById(
        "quote"
      ).innerText = `"Es ist ein Fehler beim Abrufen des Zitats aufgetreten."`;
      document.getElementById("author").innerText = "";
    });
}
