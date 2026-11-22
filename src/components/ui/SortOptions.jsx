const SortOptions = ({ sortOptions }) => {
    return (
        <div className="sort-options">
            {sortOptions.map((option) => (
                <div key={option.value} className="sort-option">
                    {option.label}
                </div>
            ))}
        </div>
    )
}

export default SortOptions;