import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Timer = ({ title, elapsedTime, timeRemaining, progressPercentage, error }) => {
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

                    {true && (
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
