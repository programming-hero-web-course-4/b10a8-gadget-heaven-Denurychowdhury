import warning from '../assets/errorbg.png';

const Errorpage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=''>
                <img className='w-full h-screen' src={warning} alt="" />
            </div>
        </div>
    );
};

export default Errorpage;