import './styles.css';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import defaultProfilePic from '../../assets/perfilImage.jpg';

const AdminMenu = ({ setNavTab }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const handleProfileClick = () => {
    setNavTab('profile');
  };
  const handleHotelsClick = () => {
    setNavTab('hotels');
  };
  const handleAdminBookingsClick = () => {
    setNavTab('adminBookings');
  };

  return (
    <div className="profile-menu">
      <section className="profile-menu__figures">
        {user.profilePic
          ? (
            <img
              className="profile-menu__pic"
              alt="profile"
              src={user.profilePic}
            />
          )
          : (
            <img
              className="profile-menu__pic"
              alt="profile"
              src={defaultProfilePic}
            />
          )}

        <div className="profile-menu__edit-container">
          <FontAwesomeIcon
            icon={faPenToSquare}
            key="edit"
            size="lg"
          />
        </div>
      </section>
      {user.name
        ? <h2 className="profile-menu__name">{user.name}</h2>
        : null}
      {user.email
        ? <p className="profile-menu__phone">{user.email}</p>
        : null}
      {user.phone
        ? <p className="profile-menu__phone">{user.phone}</p>
        : null}
      <section className="profile-menu__bar">
        <button type="button" className="card__barOptions" onClick={handleProfileClick}>Profile</button>
        <button type="button" className="card__barOptions" onClick={handleHotelsClick}>Hotels</button>
        <button type="button" className="card__barOptions" onClick={handleAdminBookingsClick}>Bookings</button>
      </section>
    </div>
  );
};
AdminMenu.propTypes = {
  setNavTab: PropTypes.func.isRequired,
};
export default AdminMenu;
