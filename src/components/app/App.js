import { useState } from 'react';
import CountdownTimer from '../countdown-timer/CountdownTimer';

const App = () => {
	const [timers, setTimers] = useState([]);
	const [timerkey, setTimerKey] = useState(1);

	const addTimer = (time) => {
		const newTimers = [...timers, <CountdownTimer timerKey={timerkey} />];
		setTimerKey(timerkey + 1);
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
