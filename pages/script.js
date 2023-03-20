async function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    const response = await fetch("http://localhost:3000/submitForm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Form submitted successfully!");
        document.getElementById("contact-form").reset();
    } else {
        alert("Error submitting the form. Please try again.");
    }
}