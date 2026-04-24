function searchFeature() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const result = document.getElementById("searchResult");

    if (input === "") {
        result.textContent = "Please enter a keyword to search.";
        return;
    }

    if (input.includes("machine learning")) {
        result.textContent = "Machine Learning helps SentinAI identify unusual transaction behaviour automatically.";
    } else if (input.includes("fraud")) {
        result.textContent = "Fraud Detection allows SentinAI to stop suspicious transactions before approval.";
    } else if (input.includes("how it works")) {
        result.textContent = "SentinAI analyses spending patterns, detects anomalies, and alerts financial teams instantly.";
    } else if (input.includes("api")) {
        result.textContent = "Developers can integrate SentinAI into existing banking apps using its secure API.";
    } else {
        result.textContent = "No exact match found. Try searching for Machine Learning, Fraud, or API.";
    }
}