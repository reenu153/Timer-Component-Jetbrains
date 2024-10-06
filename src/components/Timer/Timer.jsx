import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * TimerComponent
 * 
 * Props:
 * - `title: string` (required) - The title of the timer.
 * - `timeRemaining: Object {minutes, seconds}` (required) - The remaining time in seconds. Default to 59:59 if not provided
 * - `elapsedTime: Object {minutes, seconds}` (required) - The initial elapsed time in seconds. Defaults to 0 if not provided.
 * - `progressPercentage: int` (required) - The progress percentage of elapsed time out of the 1 hour provided by the timer,
 * - `timeEnded: boolean` (required) - Denotes whether timer has ended or 59 minutes and 59 seconds have elapsed or not
 * 
 * Description:
 * - The component shows a countdown from the initial value of 'timeRemaining' to 00:00, and it displays the remaining time in MM:SS format.
 * - It includes Start, Pause, and Reset buttons to control the timer.
 * - When the timer ends, the background alternates between green and red with a smooth animation.
 */

const Timer = ({ title, elapsedTime, timeRemaining, progressPercentage, timeEnded=false }) => {
    const formatTime = (minutes, seconds) => {
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        return `${formattedMinutes}:${formattedSeconds}`;
    };
    return (
        <>
            <div className='relative'>
                <Box
                    sx={{
                        position: 'relative', // So the animation is applied to the container
                        display: 'inline-flex',
                    }}
                >
                    <CircularProgress sx={{ boxShadow: 'inset 0 0 0 7.5px #545576', borderRadius: '50%', color: '#67cb88' }} thickness={1.5} size={250} variant="determinate" value={progressPercentage || 0} />

                    {timeEnded && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: '50%',
                                animation: 'colorChange 2s linear infinite',
                                backgroundColor: 'green',
                            }}
                        />
                    )}
                </Box>

                <div className='absolute flex flex-col items-center justify-center  text-white top-[70px] left-[80px] '>

                    <div className='text-[#a2a4cb] text-[16px]'>{title}</div>
                    <div className="text-[34px] text-white mt-[5px] mb-[5px]">{formatTime(elapsedTime?.minutes || 0, elapsedTime?.seconds || 0)}</div>
                    <div className="text-[#a2a4cb] text-[16px]">{formatTime(timeRemaining?.minutes || 59, timeRemaining?.seconds || 59)} left</div>
                </div>

            </div>
        </>
    )
}

export default Timer
