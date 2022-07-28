import Card from "./Card";

function Table ({table, onDrop}) {

    const onDragOver = e => {
        e.preventDefault();
    };

    return ( 
        <div className="table-stacks">
            {table.map((stack, stackI) => (
                <div className="table-stack droppable" id={stackI} key={'table'+stackI} onDragOver={onDragOver} onDrop={(e) => onDrop(e, stackI, 'table')}>
                    {stack.map((card, i) => (
                        <Card stack={stackI} card={card} key={'table-card'+i} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Table ;