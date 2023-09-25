import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';
import PhoneIcon from '../../data/phone-icon.svg';
import NameIcon from "../../data/name-icon.svg";
import { withStyles } from 'react-jss';
import { styles } from "./contactFormStyles";

class ContactForm extends React.Component {
    static propTypes = {
        btnText: PropTypes.string,
    };

    state = {
        name: '',
        number: '',
    };

    // Generation of unique identifiers for form fields
    nameInputId = nanoid();
    numberInputId = nanoid();
    
    // Form submission processing
    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit({ name: this.state.name, number: this.state.number });

        this.setState({ number: '', name: '' });
    };
    
    // Processing of changes to form field values
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <label className={classes.label} htmlFor={this.nameInputId}>
                    <img 
                        className={classes.labelImg}
                        src={NameIcon} alt="Name" 
                        width={32}
                    />
                    <input
                        className={classes.formInput}
                        type="text"
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Name'
                        minLength="2"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={classes.label} htmlFor={this.numberInputId}>
                    <img
                        className={classes.labelImg}
                        src={PhoneIcon} 
                        alt="Phone" 
                        width={32}
                    />
                    <input
                        className={classes.formInput}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                        placeholder='Number'
                        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={classes.formButton} type="submit">{this.props.btnText}</button>
            </form>
        );
    }
};

export default withStyles(styles)(ContactForm);