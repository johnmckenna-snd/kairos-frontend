import Countdown from 'react-countdown';

const CountdownTimer = () => {
	const renderer = ({ hours, minutes, seconds, completed }) => {
		if (completed) return <h1>yay</h1>;
		return <h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>;
	};
	return (
		<Countdown
			date={Date.now() + 10000}
			renderer={renderer}
			/>
	)
};

export default CountdownTimer;
