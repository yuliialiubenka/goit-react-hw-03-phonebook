import PropTypes from 'prop-types';
import { useStyles } from "./contactListStyles";
import ContactIcon from "../../data/contact-icon.svg";
import DeleteIcon from "../../data/delete-icon.svg";
import { getRandomHexColor } from './getRandomHexColor';

export const ContactList = ({ ...props }) => {
    const classes = useStyles();
    
    return (
        <ul className={classes.contactList}>
            {props.contacts.map(contact => (
                <li key={contact.id} className={classes.contactListItem}>
                    <img
                        className={classes.contactImg}
                        src={ContactIcon} 
                        alt="Phone" 
                        width={36}
                        style={{ backgroundColor: getRandomHexColor() }}
                    />
                    <div className={classes.contactInfo}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                    </div>
                    <button
                        className={classes.contactListButton}
                        type="button"
                        name="delete"
                        onClick={() => props.onRemoveContact(contact.id)}
                    >
                        <img
                            className={classes.contactImg}
                            src={DeleteIcon} 
                            alt="Phone" 
                            width={24}
                        />
                    </button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};