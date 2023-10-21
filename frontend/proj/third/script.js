function createEventCard() {
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventLocation = document.getElementById("eventLocation").value;
    const eventPoster = document.getElementById("eventPoster").files[0];

    if (eventName && eventDate && eventLocation && eventPoster) {
        const eventCard = document.getElementById("eventCard");
        eventCard.innerHTML = `
            <h2>${eventName}</h2>
            <p>Date: ${eventDate}</p>
            <p>Location: ${eventLocation}</p>
            <img src="${URL.createObjectURL(eventPoster)}" alt="${eventName} Poster">
        `;
        eventCard.style.display = "block";

        // Accumulate data in an array
        const eventData = { eventName, eventDate, eventLocation, eventPoster };
        const accumulatedEvents = JSON.parse(localStorage.getItem('accumulatedEvents')) || [];
        accumulatedEvents.push(eventData);
        localStorage.setItem('accumulatedEvents', JSON.stringify(accumulatedEvents));
    }
}
