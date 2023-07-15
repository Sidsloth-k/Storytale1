function redirectToContact(number) {
    var isWhatsAppAvailable = /WhatsApp/i.test(navigator.userAgent);

    if (isWhatsAppAvailable) {
        // Redirect to WhatsApp
        window.location.href = 'https://wa.me/' + number;
    } else {
        // Redirect to phone number
        window.location.href = 'tel:' + number;
    }
}