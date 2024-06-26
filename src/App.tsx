import { useState } from 'react';
import '../public/snake-game-ai-gen.png';
import './App.css';
import GameBoard from './GameBoard';
import HighScore from './HighScore';
import Score from './Score';
import WelcomeScreen from './WelcomeScreen';

function App() {
	const [gridSize, setGridSize] = useState(20);
	const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
	const [food, setFood] = useState({ x: 0, y: 0 });
	const [highScore, setHighScore] = useState(0);
	const [direction, setDirection] = useState('right');
	const [gameStarted, setGameStarted] = useState(false);

	document.addEventListener('keydown', () => {
		console.log('elo');
	});

	return (
		<div className='gameContainer'>
			<div>
				<div className='scores'>
					<Score />
					<HighScore />
				</div>

				<div className='gameBorder1'>
					<div className='gameBorder2'>
						<div className='gameBorder3'>
							<GameBoard />
						</div>
					</div>
				</div>
			</div>

			<WelcomeScreen />
		</div>
	);
}

export default App;
