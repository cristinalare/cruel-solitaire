function Instructions () {
    return ( 
        <div>
            Your goal is to win! You win the game only when you move all cards to the foundation (the four piles in the bottom right corner). Each foundation starts with an Ace. Then you place cards of the same suit in ascending order: Ace, 2, 3, 4, ..., 10, Jack, Queen and King.

            Cards are shuffled and dealt face up on the tableau (the 12 piles in the bottom of the screen). During the deal, each Ace goes on a foundation, leaving exactly four cards per pile on the tableau.

            Only the top card from the tableau can be moved to another pile:

            The foundation of the same suit, in ascending order.
            Another top card of the same suit, in descending order.
            Note: If a pile becomes empty, you cannot place any card on it.

            When no more cards can be played, click the empty stock pile in the top left to redeal the cards from the tableau. Cards are collected but not shuffled and dealt again into 4 cards piles.
        </div>
     );
}

export default Instructions;