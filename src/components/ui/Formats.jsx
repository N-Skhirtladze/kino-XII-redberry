const Formats = ({ formats }) => {
    return (
        <div className="format-list">
            {formats.map(format => (
                <p className="format" key={format.id}>{format?.name}</p>
            ))}
        </div>
    );
};

export default Formats;
