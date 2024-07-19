import { useEffect, useState } from "react";
import "../styles/List.scss";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setTripList } from "../redux/state";
import ListingCard from "../components/ListingCard";
import Footer from "../components/Footer"

const TripList = () => {
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.user?._id); // Using optional chaining
  const tripList = useSelector((state) => state.user?.tripList); // Using optional chaining

  const dispatch = useDispatch();

  const getTripList = async () => {
    try {
      if (!userId) {
        console.log("User ID is not available.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `http://localhost:3001/users/${userId}/trips`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setTripList(data));
      setLoading(false);
    } catch (err) {
      console.log("Fetch Trip List failed!", err.message);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    getTripList();
  }, [userId]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 className="title-list">Your Trip List</h1>
      <div className="list">
        {tripList?.map(({ listingId, hostId, startDate, endDate, totalPrice, booking = true }) => (
          <ListingCard
            key={listingId?._id} // Added a key prop
            listingId={listingId?._id} // Using optional chaining
            creator={hostId?._id} // Using optional chaining
            listingPhotoPaths={listingId?.listingPhotoPaths} // Using optional chaining
            city={listingId?.city} // Using optional chaining
            province={listingId?.province} // Using optional chaining
            country={listingId?.country} // Using optional chaining
            category={listingId?.category} // Using optional chaining
            startDate={startDate}
            endDate={endDate}
            totalPrice={totalPrice}
            booking={booking}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default TripList;
