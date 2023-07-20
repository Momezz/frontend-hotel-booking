/* eslint-disable no-unused-vars */
import './style.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/auth';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const { form, handleChange } = useForm({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(login(form));
      navigate('/');
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <section id="login-form" className="login-form">
      <h2 className="login-form__header">Login</h2>
      <article id="sign-up-form" className="login-form__section">
        <form action="" onSubmit={handleSubmit} id="login-form__form">
          <label htmlFor="email" className="login-form__input-group">
            Email Address
            <input
              className="login-form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="password" className="login-form__input-group">
            Password
            <input
              className="login-form__input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="login-form__create-button"
          >
            Login
          </button>
        </form>
      </article>
    </section>
  );
};

export default LoginForm;
