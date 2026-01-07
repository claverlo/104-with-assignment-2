let salon = {
    name: "Happy Paws Pet Salon",
    address: {
        street: "123 Main Street",
        city: "San Diego, CA",
        zip: "1234"
    },
    hours: {
        open: "9:00 AM",
        close: "6:00 PM"
    }
};

function displaySalonInfo(){
    let p = document.getElementById("SalonInformation");

    p.textContent = `Welcome to ${salon.name}! 
We are located at ${salon.address.street}, ${salon.address.city} ${salon.address.zip}. 
Our hours of operation are from ${salon.hours.open} to ${salon.hours.close}. 
You can contact us at 111-555-1234.`;
}

displaySalonInfo();
