    async function loadQuotes(animationSource) {
      const container = document.getElementById("quoteContainer");
      //   Resetting contents and css
      container.className = "";
      container.innerHTML = "";

      if (animationSource === "top") {
        container.className = 'fadeInUp-animation';
      } else if (animationSource === "bottom") {
        container.className = 'fadeInDown-animation';
      } else {
        container.className = 'fadeFrom-animation';
      }

      //   API for quotes will be an object
      const res = await fetch("/api/quotes");
      const quotes = await res.json();

      const quoteDiv = document.createElement("div");
      quoteDiv.id = quotes._id;

      quoteDiv.textContent = '"' + quotes.quote + '"';

      //   Nested div for Author name and Book name
      const authorDiv = document.createElement("div");
      authorDiv.textContent = "- " + quotes.author + ", " + quotes.book;

      // 4. Append the nested div to the parent div
      quoteDiv.appendChild(authorDiv);

      container.appendChild(quoteDiv);

    }

    loadQuotes();