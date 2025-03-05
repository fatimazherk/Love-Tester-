function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();
    let resultDiv = document.getElementById("result");

    if (name1 === "" || name2 === "") {
        resultDiv.innerHTML = "Please enter both names!";
        return;
    }

    let lovePercentage = Math.floor(Math.random() * 51) + 50; // Random % between 50-100
    let message = "";

    if (lovePercentage > 85) {
        message = "🔥 You both are a perfect match!";
    } else if (lovePercentage > 70) {
        message = "💖 A strong bond with great potential!";
    } else {
        message = "❤️ There's love, but it needs effort!";
    }

    // Corrected: Using backticks for template literals
    resultDiv.innerHTML = `${name1} & ${name2} have a love score of <b>${lovePercentage}%</b>! <br> ${message}`;
}
