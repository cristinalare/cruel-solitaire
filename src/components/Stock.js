import Card from './Card';

function Stock ({reorderTable}) {
    return (
        <div>
            <button onClick={reorderTable} className="stock-btn"> + </button>
        </div>
    );
}

export default Stock ;