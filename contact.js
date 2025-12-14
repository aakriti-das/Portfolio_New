(function(){
    emailjs.init({
        publicKey: "A2KHgkiqvO6Ur7uKa"
    });
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_yheq4jo", "template_2tnwavw", params)
    .then(() => {
        document.getElementById("status").innerText = "Message sent successfully!";
        document.getElementById("contact-form").reset();
    })
    .catch((error) => {
        console.error("EmailJS Error:", error);
        document.getElementById("status").innerText = "Failed to send message.";
    });
});
