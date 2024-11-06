import warning from '../assets/errorbg.png';

const Errorpage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=''>
                <h1 className='text-2xl font-bold'>Not available Data <span>404</span></h1>
                <img className='w-full min-h-screen[calc(100vh-232px)]' src={warning} alt="" />
            </div>
        </div>
    );
};

export default Errorpage;