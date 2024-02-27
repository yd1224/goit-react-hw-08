import { GiRotaryPhone } from "react-icons/gi";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <>
      <div className="context">
        <div className={css.phone}>
          <GiRotaryPhone size={150} />
        </div>
        <p className={css.text}>
          <span className={css.span}>Phone Book </span>
          is a convenient application for storing and managing your contacts.
          Forget about the clutter in your phone directory -
          <span className={css.span}> Phone Book</span> will help you easily
          organize your contacts, quickly find the people you need, and stay
          connected at all times. Add{" "}
          <span className={css.span}>new contacts</span> or edit existing ones
          to always have up-to-date information and then quickly find by
          searching by name or number.
        </p>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}
