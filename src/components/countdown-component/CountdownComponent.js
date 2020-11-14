const CountdownComponent = ({ hours, minutes, seconds, api, completed, timerKey }) => {
	const isPaused = api.isPaused();
	return (
		<div key={timerKey}>
			{completed
				?	<h1>{timerKey} completed</h1>
				:	<h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
			}
			{isPaused
				? <button onClick={api.start}>start</button>
				: <button onClick={api.pause}>pause</button>
			}
		</div>
	);
};

export default CountdownComponent;
