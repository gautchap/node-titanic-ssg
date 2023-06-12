// eslint-disable-next-line react/prop-types
const Card = ({ children }) => {
    const style = {
        height: "17em",
        display: "inline-block",
        width: "70%",
        maxWidth: "25em",
        padding: "1em",
        backgroundColor: "#B0DEE3",
        margin: "1em",
        opacity: "0.8",
    };
    return (
        <div style={style} className="rounded-4 shadow-sm">
            {children}
        </div>
    );
};

export default Card;
