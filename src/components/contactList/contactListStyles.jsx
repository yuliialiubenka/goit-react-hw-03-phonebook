import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    contactList: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        overflowY: "auto",
        height: 184,
        scrollbarWidth: "thin",
        padding: 4,
        "&::-webkit-scrollbar": {
            width: 6
        },
        marginRight: "-10px",
        "@media (max-width: 480px)": {
            marginRight: "-2px",
            height: "calc(100% - 340px)"
        }
    },
    contactListItem: {
        display: "flex",
        alignItems: "center",
        padding: 6,
        marginLeft: "-2px",
        maxWidth: 260,
        gap: 8,
        borderRadius: 8,
        boxShadow: "rgb(95, 94, 95) 0px 1px 3px 2px;",
        "@media (max-width: 480px)": {
            maxWidth: "100%",
        }
    },
    contactImg: {
        flexShrink: 0,
        borderRadius: "50%",
    },
    contactInfo: {
        width: "100%",
        "& p": {
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: 160
        }
    },
    contactListButton: {
        borderRadius: "50%",
        background: "#000",
        border: "none",
        cursor: "pointer",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 6
    }
});