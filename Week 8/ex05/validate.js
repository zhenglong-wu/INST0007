function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var postcode = document.getElementById('postcode').value;

    if (name === "" || email === "" || postcode === "") {
        alert("All fields are required.");
        return false;
    }

    if (!/^\d{5}$/.test(postcode)) {
        alert("Postcode must be 5 digits.");
        return false;
    }

    var atSymbol = email.indexOf("@");
    var dotCount = (email.split(".").length - 1);

    if (atSymbol === -1 || dotCount !== 2) {
        alert("Email must contain an '@' and exactly two '.' characters.");
        return false;
    }

    return true;
}