"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteRevervation } from "../_lib/actions";
function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );
  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteRevervation(bookingId);
  }
  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
