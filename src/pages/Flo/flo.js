import './flo.css';
import { useEffect, useState } from 'react'
import SingleCard from '../../components/SingleCardFlo/singleCard';

const cardImages = [
    { "src": "/img/asDeCoeur.png", matched: false },
    { "src": "/img/asDePique.png", matched: false },
    { "src": "/img/deuxDePique.png", matched: false },
    { "src": "/img/huitDeTrefle.png", matched: false },
    { "src": "/img/sixDePique.png", matched: false },
    { "src": "/img/troisDeCoeur.png", matched: false },
    { "src": "/img/troisDePique.png", matched: false },
    { "src": "/img/valetDePique.png", matched: false }
]

export function Flo() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiseOne, setChoiseOne] = useState(null)
    const [choiseTwo, setChoiseTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)

    // Mélanger les cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setChoiseOne(null)
        setChoiseTwo(null)
        setCards(shuffledCards)
        setTurns(0)
    }

    // gérer les choix

    const handleChoise = (card) => {
        choiseOne ? setChoiseTwo(card) : setChoiseOne(card)
    }

    //retourner les cartes à partir de 1.5 secondes

    useEffect(() => {
        let timeoutId = null;
    
        if (choiseOne) {
          timeoutId = setTimeout(() => {
            setChoiseOne(null);
          }, 1500);
        }
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [choiseOne]);


    // comparer les deux cards selectionnées
    useEffect(() => {
        if (choiseOne && choiseTwo) {
            setDisabled(true)

            if (choiseOne.src === choiseTwo.src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choiseOne.src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {

                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiseOne, choiseTwo])

    // console.log(cards);

    // reset les choix et augmenter de +1 à chaque tours
    const resetTurn = () => {
        setChoiseOne(null)
        setChoiseTwo(null)
        setTurns(prevTurns => prevTurns + 1)
        setDisabled(false)
    }
    
    // commencer une nouvelle partie
    useEffect(() => {
        shuffleCards()
    }, [])

    return (
        <div className="App">
            <h1>Memorize CDA</h1>
            <button onClick={shuffleCards}>Play</button>

            {/* grid */}
            <div className='card-grid'>
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoise={handleChoise}
                        flipped={card === choiseOne || card === choiseTwo || card.matched}
                        disabled={disabled}
                        choiseOne={choiseOne} />
                ))}
            </div>
            <p>Tours: {turns}</p>
        </div>
    );
}

export default Flo;