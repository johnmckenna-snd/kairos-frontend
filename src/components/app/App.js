import { useState } from 'react';
import CountdownTimer from '../countdown-timer/CountdownTimer';

const App = () => {
	const [timers, setTimers] = useState([]);
	const [timerKey, setTimerKey] = useState(1);

	const addTimer = (time) => {
		const newTimers = [...timers, <CountdownTimer timerKey={timerKey} />];
		setTimerKey(timerKey + 1);
		setTimers(newTimers);
	};

	return (
		<div>
			<h1>kairos</h1>
			<button onClick={addTimer}>new timer</button>
			{timers}
		</div>
	);
};

export default App;
