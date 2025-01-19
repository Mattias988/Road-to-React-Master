export default function Stats({items}) {
    if(!items.length) {
        return(
            <p className="stats">
                <em>Start packing items to your packing list 😎</em>
            </p>
        )
    }
    return(
        <footer className="stats">
            <em>You have {items.length} items on your list, and you already packed {items.filter((items) => items.packed === true).length}</em>
        </footer>
    )
}
