import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHotelById } from '../../features/hotels/hotelsSlice';
import BookingForm from '../../components/BookingForm/BookingForm';
import HotelContact from '../../components/HotelContact/HotelContact';
import HotelGallery from '../../components/HotelGallery/HotelGallery';
import HotelInfo from '../../components/HotelInfo/HotelInfo';
import HotelRooms from '../../components/HotelRooms/HotelRooms';
import HotelsAbout from '../../components/HotelsAbout/HotelsAbout';
import HotelsLocation from '../../components/HotelsLocation/HotelsLocation';
import HotelsMenu from '../../components/HotelsMenu/HotelsMenu';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Rooms = () => {
  const { id } = useParams();
  const [coordinates, setCoordinates] = useState(['0', '0']);
  const [navTab, setNavTab] = useState('rooms');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotelById(id));
  }, [id]);

  useEffect(() => {
  }, [navTab]);

  const {
    about,
    address,
    checkin,
    checkout,
    city,
    country,
    email,
    feature1,
    feature2,
    geoLocation,
    images,
    name,
    offerPrice,
    phone,
    pricePerNight,
    rooms,
  } = useSelector((state) => state.hotels.hotels);
  useEffect(() => {
    if (geoLocation) {
      setCoordinates(geoLocation.coordinates);
    }
  }, [geoLocation]);
  return (
    <div className="hotel-details">
      <header className="hotel-details__header">
        <NavigationBar />
      </header>
      <div className="hotel-details__hotel-info">
        {name && address && feature1 && feature2
          ? (
            <HotelInfo
              name={name}
              address={address}
              feature1={feature1}
              feature2={feature2}
            />
          )
          : null}

      </div>

      <div className="hotel-details__main-container">
        <div className="hotel-details__hotel-container">
          <div className="hotel-details__hotel-images">
            {images
              ? (
                <HotelGallery
                  images={images}
                />
              )
              : null}
          </div>
          <HotelsMenu navTab={navTab} setNavTab={setNavTab} />
          {
            rooms && navTab === 'rooms' ? (
              <main className="hotel-details__rooms">
                <HotelRooms rooms={rooms} />
              </main>
            ) : null
          }
          { navTab === 'about' ? (
            <main className="hotel-details__rooms">
              <HotelsAbout about={about} />
            </main>
          ) : null }
          { navTab === 'location' ? (
            <main className="hotel-details__rooms">
              <HotelsLocation country={country} city={city} address={address} />
            </main>
          ) : null }

        </div>
        <aside className="hotel-details__aside">
          {pricePerNight && rooms
            ? (
              <BookingForm
                pricePerNight={pricePerNight}
                offerPrice={offerPrice}
                coordinates={coordinates}
                id={id}
                rooms={rooms}
              />
            )
            : null}
          <HotelContact
            address={address}
            phone={phone}
            email={email}
            checkin={checkin}
            checkout={checkout}
          />
        </aside>
      </div>
    </div>
  );
};

export default Rooms;
