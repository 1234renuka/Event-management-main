import axios from "axios";

const EventCard = ({ event }) => {
  const bookEvent = async () => {
    try {
      await axios.post(
        `/api/bookings/${event._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Event booked successfully 🎉");
    } catch (error) {
      alert(error.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <button onClick={bookEvent}>Book Event</button>
    </div>
  );
};

export default EventCard;
