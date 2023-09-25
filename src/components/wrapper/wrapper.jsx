import PropTypes from 'prop-types';
import { useStyles } from "./wrapperStyles";
import Phone from "../../data/phone.png";

export const Wrapper = ({ children, ...props }) => {
    const classes = useStyles();
    
    return (
        <div className={classes.wrapper}
        style={{
            backgroundImage: `url(${Phone})`,
        }}
        >
            <div className={classes.wrapperItem}>
                <h1 className={classes.title}>{props.title}</h1>
                {children}
            </div>

        </div>
    );
};

Wrapper.propTypes = {
    title: PropTypes.string.isRequired
};