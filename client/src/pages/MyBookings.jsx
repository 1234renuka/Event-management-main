import { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/bookings/my", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.map((b) => (
        <div key={b._id}>
          <h4>{b.event.title}</h4>
          <p>{new Date(b.event.date).toDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
