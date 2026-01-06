let salon = {
    name: "Pet Salon",
    hours: {
        open: "9:00 AM",
        close: "6:00 PM"
    },
    phone: "619-555-1234",
    address: {
        street: "123 Main St",
        city: "San Diego",
        state: "CA",
        zip: "92101"
    }
};

function displaySalonInfo() {
    let info =
        salon.name + " | " +
        "Hours: " + salon.hours.open + " - " + salon.hours.close + " | " +
        "Phone: " + salon.phone + " | " +
        "Address: " + salon.address.street + ", " +
        salon.address.city + ", " +
        salon.address.state + " " +
        salon.address.zip;

    document.getElementById("salonInfo").innerHTML = info;
}

displaySalonInfo();
