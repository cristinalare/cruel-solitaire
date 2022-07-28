import Header from './Header/Header';
import Stock from './Stock';
import Foundation from './Foundation';
import Table from './Table';
import {useState, useEffect} from 'react';
import {create, shuffle, chunk} from 'lodash';


const cardsData = {
    symbols: {
        club: '♣',
        diamond: '♦',
        heart: '♥',
        spade: '♠'
    },
    numbers: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
}

const createTable = () => {
    let cardsDeck = [];
    cardsData.numbers.forEach(number => {
        for (let [cardsType, cardsSymbol] of Object.entries(cardsData.symbols)) {
            cardsDeck.push({
                symbol: cardsSymbol,
                num: number,
                type: cardsType
            })
        }
    });
    return cardsDeck;
}

const createFoundation = () => {
    let foundationDeck = [];
    for (let [cardsType, cardsSymbol] of Object.entries(cardsData.symbols)) {
        foundationDeck.push({
            symbol: cardsSymbol,
            num: 'A',
            type: cardsType
    })
    }
    return foundationDeck;
}

function Game () {
    const [foundation, setFoundation] = useState(chunk(shuffle(createFoundation()), 1)); // 4 aces
    const [table, setTable] = useState(chunk(shuffle(createTable()), 4)); // 12piles x 4 cards

    useEffect(() => {
        if (table.flat().length === 0) {
            alert('yabadabadoo');
        }
    }, [table]);

    const onDrop = (e, targetIndex, targetCategory) => {
        // data from the new card
        let prevStack = e.dataTransfer.getData('stack');
        let prevCard, targetCard;
        prevCard = table[prevStack][table[prevStack].length - 1];

        // target card
        if (targetCategory === 'table') {
            targetCard = table[targetIndex][table[targetIndex].length - 1];
        } else {
            targetCard = foundation[targetIndex][foundation[targetIndex].length -1];
        }
        
        // remove item from previous array and add it on the target array
        if (canMoveCard(prevCard, targetCard, targetCategory)) {
            console.log('canmove');
            const newTable = [...table];
            const newFoundation = [...foundation];
            const removedEl = newTable[prevStack].pop();
            if (targetCategory === 'table') {
                newTable[targetIndex].push(removedEl);
                
            } else {
                newFoundation[targetIndex].push(removedEl);
            }
            setTable(newTable);
            setFoundation(newFoundation);
        }
    };

    const reorderTable = () => {
        let newTableArr = [...table].flat();
        console.log(newTableArr);
        newTableArr = chunk(newTableArr, 4);
        setTable(newTableArr);
    }

    return (
        <div>
            <Header />
            <main>
                <Stock reorderTable={reorderTable}/>
                <Foundation foundation={foundation} onDrop={onDrop} />
                <Table table={table} onDrop={onDrop} />
            </main>
        </div>
    );
}

const getCardNum = (card) => {
    switch(card.num) {
        case 'J':
            return 11;
        case 'Q':
            return 12;
        case 'K':
            return 13;
        case 'A':
            return 1;
        default: 
            return card.num;
    }
};

const canMoveCard = (card, targetCard, targetType) => {
    let dif;
    if (targetType === 'table') {
        dif = getCardNum(targetCard) - getCardNum(card);
    } else {
        dif = getCardNum(card) - getCardNum(targetCard);
    }
    return dif === 1 && targetCard.type === card.type ? true : false;
}

export default Game ;