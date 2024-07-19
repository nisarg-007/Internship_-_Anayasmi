import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setReservationList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"

const ReservationList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user?._id); // Using optional chaining
  const reservationList = useSelector((state) => state.user?.reservationList); // Using optional chaining

  const dispatch = useDispatch();

  const getReservationList = async () => {
    try {
      if (!userId) {
        console.log("User ID is not available.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `http://localhost:3001/users/${userId}/reservations`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setReservationList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Reservation List failed!", err.message);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getReservationList();
  }, [userId]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Reservation List</h1>
      <div className="list">
        {reservationList?.length > 0 ? reservationList.map(({ listingId, hostId, startDate, endDate, totalPrice, booking = true }) => (
          // Adding null checks for listingId and hostId before accessing their properties
          listingId && hostId ? (
            <ListingCard
              key={listingId._id} // Added a key prop
              listingId={listingId._id} // Using optional chaining
              creator={hostId._id} // Using optional chaining
              listingPhotoPaths={listingId.listingPhotoPaths} // Using optional chaining
              city={listingId.city} // Using optional chaining
              province={listingId.province} // Using optional chaining
              country={listingId.country} // Using optional chaining
              category={listingId.category} // Using optional chaining
              startDate={startDate}
              endDate={endDate}
              totalPrice={totalPrice}
              booking={booking}
            />
          ) : (
            // Handle the case where listingId or hostId is null
            <div key={startDate}>Invalid reservation data</div>
          )
        )) : (
          <div>No reservations available</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ReservationList;
