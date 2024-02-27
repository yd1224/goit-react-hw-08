import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { selectLoading, selectVisibleContacts } from "../../redux/selectors";

export const ContactList = ({ handleScroll }) => {
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {loading && (
        <div className={css.colorRingWrapperBox}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#de0c1c", "#fe2d2d", "#fb7830", "	#fecf02", "#ffdd47"]}
          />
        </div>
      )}
      {/* {error && <p className={css.error}>{error}</p>} */}
      <ul>
        {visibleContacts.map((contact) => {
          return (
            <li className={css.list} key={contact.id}>
              <Contact user={contact} onhandleScroll={handleScroll} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
