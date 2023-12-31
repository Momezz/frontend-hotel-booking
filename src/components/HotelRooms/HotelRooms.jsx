import './style.css';
import PropTypes from 'prop-types';
import RoomCard from '../RoomCard/RoomCard';

const HotelRooms = ({ rooms }) => (
  <section id="hotel-rooms" className="hotel-rooms">
    {rooms.map((e) => (
      <article key={e._id} id="rooms" className="hotel-rooms__list">
        <RoomCard
          roomType={e.roomType}
          image={e.image}
          bedType={e.bedType}
          amenitiesPool={e.amenitiesPool}
          amenitiesShower={e.amenitiesShower}
          amenitiesTV={e.amenitiesTV}
          amenitiesCouch={e.amenitiesCouch}
          pricePerNight={e.pricePerNight}
          offerPrice={e.offerPrice}
        />
        <hr className="hotel-rooms__list-divider" />
      </article>
    ))}
  </section>
);

HotelRooms.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bedType: PropTypes.string.isRequired,
    amenitiesShower: PropTypes.bool.isRequired,
    amenitiesTV: PropTypes.bool.isRequired,
    amenitiesCouch: PropTypes.bool.isRequired,
    amenitiesPool: PropTypes.bool.isRequired,
    pricePerNight: PropTypes.number.isRequired,
    offerPrice: PropTypes.number,
  })).isRequired,
};

export default HotelRooms;
