export const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 12,
        marginBottom: 16
    },
    label: {
        display: "flex",
        gap: 6,
        alignItems: "center"
    },
    labelImg: {
        flexShrink: 0
    },
    formInput: {
        width: "100%",
        borderRadius: 8,
        fontFamily: "inherit",
        padding: "6px 12px",
        lineHeight: 1.2,
        fontSize: 16,
        border: "1px solid #000",
        "&:focus, &:focus-visible": {
            border: "1px solid rgb(95, 94, 95)",
            outline: "none",
            boxShadow: "rgb(95, 94, 95) 0px 1px 3px 2px;",
        }
    },
    formButton: {
        padding: 6,
        fontFamily: "inherit",
        lineHeight: 1.2,
        fontWeight: 600,
        fontSize: 16,
        borderRadius: 8,
        color: "#fff",
        background: "#000",
        border: "1px solid #000",
        cursor: "pointer",
    }

};