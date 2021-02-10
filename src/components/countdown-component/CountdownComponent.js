import styled from 'styled-components';

const CountdownWrapper = styled.div`
	background-color: white;
`;

const CountdownComponent = ({ hours, minutes, seconds, api, completed, timerKey, clearTimer }) => {
	const isPaused = api.isPaused();
	const handleClear = () => {
		clearTimer(timerKey);
	};
	return (
		<CountdownWrapper key={timerKey}>
			{completed
				?	<h1>{timerKey} completed</h1>
				:	<h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
			}
			{isPaused
				? <button onClick={api.start}>start</button>
				: <button onClick={api.pause}>pause</button>
			}
			<button onClick={handleClear}>clear</button>
		</CountdownWrapper>
	);
};

export default CountdownComponent;
