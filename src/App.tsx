import { useState } from 'react';
import '../public/snake-game-ai-gen.png'

import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<div className='scores'>
					<h1 id='score'>000</h1>
					<h1 id='highScore'>000</h1>
				</div>
				<div className='gameBorder1'>
					<div className='gameBorder2'>
						<div className='gameBorder3'>
							<div id='gameBoard'></div>
						</div>
					</div>
				</div>
			</div>
			<h1 id='instructionText'>Press space bar to start the game</h1>
			<img id='logo' src='snake-game-ai-gen.png' alt='snake logo' />
		</>
	);
}

export default App;
