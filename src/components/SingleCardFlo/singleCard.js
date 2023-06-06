import './singleCard.css'

export default function SingleCardFlo({ card, handleChoise, flipped, disabled, choiseOne, resetCard }) {

  const handleClick = () => {
    if (!disabled) {
      handleChoise(card)
    } 
  }
  // const reset = () => {
  // if (choiseOne = null) {
  //   const timer = setTimeout(() => {
  //         resetCard()
  //     }, 1000);
  //     return () => clearTimeout(timer);
  // }}

  // const finalClick = () => {
  //   handleClick();
  //   reset();
  // };

  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt='card front' />
        <img
          className='back'
          src='/img/dosCarteAJouer.png'
          onClick={handleClick}
          alt='card back' />
      </div>
    </div>
  )
}