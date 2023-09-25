import PropTypes from 'prop-types';
import { useStyles } from "./contactFilterStyles";
import SearchIcon from "../../data/search-icon.svg";

export default function ContactFilter ({ ...props }) {
    const classes = useStyles();
    
    return (
        <div className={classes.filterWrapper}>
            <h2 className={classes.filterTitle}>{props.title}</h2>
            <label className={classes.filterLabel} htmlFor="search">
                <img
                    className={classes.labelImg}
                    src={SearchIcon} 
                    alt="Phone" 
                    width={28}
                />
                <input
                    name='search'
                    className={classes.filterInput}
                    type="text"
                    placeholder="Find contacts by name"
                    value={props.value} 
                    onChange={props.onChangeFilter}
                />
            </label>
        </div>
    );
};

ContactFilter.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};
  
  