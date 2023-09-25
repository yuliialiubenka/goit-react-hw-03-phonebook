import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    filterWrapper: {
        marginBottom: 16,
    },
    filterTitle: {
        textAlign: "center",
        marginBottom: 16
    },
    filterLabel: {
        display: "flex",
        gap: 8,
        paddingLeft: 2
    },
    filterInput: {
        width: "100%",
        borderRadius: 8,
        fontFamily: "inherit",
        padding: "6px 12px",
        lineHeight: 1.2,
        fontSize: 16,
        border: "1px solid #000",
        "&:focus": {
            border: "1px solid rgb(95, 94, 95)",
            outline: "none",
            boxShadow: "rgb(95, 94, 95) 0px 1px 3px 2px;",
        }
    }
});