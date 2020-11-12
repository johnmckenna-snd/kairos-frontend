import Countdown from 'react-countdown';

const CountdownTimer = ({timerKey}) => {
	const renderer = ({ hours, minutes, seconds, completed, api }) => {
		if (completed) return <h1 key={timerKey}>{timerKey}</h1>;
		return (
			<div>
				<h1 key={timerKey}>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
				<span>
					<button onClick={api.start}>start</button>
					<button onClick={api.pause}>pause</button>
				</span>
			</div>
		);
	};
	return (
		<Countdown
			date={Date.now() + 10000}
			renderer={renderer}
			/>
	);
};

export default CountdownTimer;
