let cardsArray;
if (cards == 0) {
    cardsArray = [];
    for (let i = 0; i < nImages; i++) {
        cardsArray.push(<ImageCard incrementScore={incrementScore} resetScore={resetScore} rounds={rounds} index={i}></ImageCard>)
        console.log(i);
    };
    setCards(cardsArray);
}   else {
    cardsArray = cards;
}
