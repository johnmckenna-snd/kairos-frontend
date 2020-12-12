import { useState } from 'react';
import CountdownTimer from '../countdown-timer/CountdownTimer';

const App = () => {
	const [timers, setTimers] = useState([]);
	const [timerKey, setTimerKey] = useState(1);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const handleHourChange = (e) => {
		e.preventDefault();
		setHours(e.target.value);
		console.log(hours);
	};

	const handleMinuteChange = (e) => {
		e.preventDefault();
		setMinutes(e.target.value);
		console.log(minutes);
	};

	const handleSecondChange = (e) => {
		e.preventDefault();
		setSeconds(e.target.value);
		console.log(seconds);
	};

	const addTimer = (time) => {
		const msPerSecond = 1000;
		const msPerMinute = msPerSecond * 60;
		const msPerHour = msPerMinute * 60;
		const countdownTime = hours * msPerHour + minutes * msPerMinute + seconds * msPerSecond;
		const newTimers = [...timers, <CountdownTimer timerKey={timerKey} countdownTime={countdownTime} />];
		setTimerKey(timerKey + 1);
		setTimers(newTimers);
	};

	return (
		<div>
			<h1>kairos</h1>
			<form>
				<label>hours</label>
				<input
					type="number"
					min="0"
					max="24"
					onChange={handleHourChange}
					default="0"
				/>
				<label>minutes</label>
				<input
					type="number"
					min="0"
					max="59"
					onChange={handleMinuteChange}
					default="0"
				/>
				<label>seconds</label>
				<input
					type="number"
					min="0"
					max="59"
					onChange={handleSecondChange}
					default="0"
				/>
			</form>
			<button onClick={addTimer}>new timer</button>
			{timers}
		</div>
	);
};

export default App;
