document.getElementById("assistant-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const profession = document.getElementById("profession").value;
    const description = document.getElementById("description").value;
    
    const responseDiv = document.getElementById("response");
    responseDiv.style.display = "none";

    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ profession, description })
        });

        if (response.ok) {
            const data = await response.json();
            responseDiv.textContent = data.message;
            responseDiv.style.display = "block";
        } else {
            responseDiv.textContent = "Error: Unable to fetch response.";
            responseDiv.style.display = "block";
        }
    } catch (error) {
        responseDiv.textContent = "Error: Unable to fetch response.";
        responseDiv.style.display = "block";
    }
});
