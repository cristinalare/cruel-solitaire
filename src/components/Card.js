function Card ({stack, card}) {

    const onDragStart = e => {
        e.dataTransfer.setData('stack', stack);
    };

    return (
        <div className={`card ${card.type}`} draggable onDragStart={onDragStart}>
            <span>{card.num}</span><br/>
            <span>{card.symbol}</span>
        </div>
    );
}

export default Card ;