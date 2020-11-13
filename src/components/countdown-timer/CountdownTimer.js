import Countdown from 'react-countdown';
import CountdownComponent from '../countdown-component/CountdownComponent';

const CountdownTimer = ({timerKey}) => {
	const renderer = ({ hours, minutes, seconds, completed, api }) => {
		return (
			<CountdownComponent
				hours={hours}
				minutes={minutes}
				seconds={seconds}
				api={api}
				completed={completed}
				timerKey={timerKey}
			/>
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
