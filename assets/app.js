document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // You can customize this part to send the form data to a server or perform other actions
        alert("Form submitted!\n" + JSON.stringify(formDataObject, null, 2));
    });
});
