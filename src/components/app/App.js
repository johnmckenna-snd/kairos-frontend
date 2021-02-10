import { useState, useRef } from 'react';
import CountdownTimer from '../countdown-timer/CountdownTimer';

const App = () => {
	const [timers, setTimers] = useState([]);
	const [timerKey, setTimerKey] = useState(1);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const timersState = useRef();

	timersState.current = timers;

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
		if (countdownTime === 0) return console.log('enter time');

		const newTimers = [...timers, <CountdownTimer key={timerKey} timerKey={timerKey} countdownTime={countdownTime} clearTimer={clearTimer} />];
		timersState.current = newTimers;
		setTimerKey(timerKey + 1);
		setTimers(newTimers);
		setHours(0);
		setMinutes(0);
		setSeconds(0);
	};

	const clearTimer = (timerKey) => {
		const currentTimers = timersState.current;
		console.log('clearTimer(): currentTimers', currentTimers);
		const findTimerKey = currentTimers.findIndex((timer) => {
			return timer.props.timerKey === timerKey;
		});
		console.log('clearTimer(): findTimerKey', findTimerKey);
		currentTimers.splice(findTimerKey, 1);
		console.log('clearTimer(): currentTimers', currentTimers);
		timersState.current = currentTimers
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
					value={hours}
				/>
				<label>minutes</label>
				<input
					type="number"
					min="0"
					max="59"
					onChange={handleMinuteChange}
					value={minutes}
				/>
				<label>seconds</label>
				<input
					type="number"
					min="0"
					max="59"
					onChange={handleSecondChange}
					value={seconds}
				/>
			</form>
			<button onClick={addTimer}>new timer</button>
			{timersState.current}
		</div>
	);
};

export default App;
