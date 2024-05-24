export const BtnReset = ({ resetGame, children }) => {
	return (
		<button className='btn-reset' onClick={resetGame}>{children}</button>
	)
}