import { BtnReset } from "./BtnReset"
import { Square } from "./Square"

export function WinnerModal({winner,resetGame}) {
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'Gano: ' 
  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <BtnReset resetGame={resetGame}>
            Reiniciar
          </BtnReset>
        </footer>
      </div>
    </section>
  )
}