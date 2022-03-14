import Note from "../Note/Note";
import styles from "./ContactItem.module.scss";

const ContactItem = ({ title, notes, isActived }) => {
    return (
        <div className={`${styles["contact-item"]} ${isActived && styles["contact-item_actived"]}`}>
            <h2 className={styles["contact-item__title"]}>{title}</h2>
            <div className={styles["contact-item__note-box"]}>
                {notes.map( ( item, index ) => <Note key={index}>{item}</Note> )}
            </div>
        </div>
    );
};

export default ContactItem;