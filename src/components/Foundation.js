import Card from './Card';

function Foundation ({foundation, onDrop}) {
    return ( 
        <div className="foundation-stacks">
            {
                foundation.map((stack, i) => (
                    <div className="foundation-stack droppable" onDragOver={e => e.preventDefault()} onDrop={(e) => onDrop(e, i, 'foundation')} key={'stack'+i}>
                        {stack.map((card, i) => (
                            <Card card={card} key={i} />
                        ))}
                        
                    </div>
                ))}
        </div>
     );
}

export default Foundation ;