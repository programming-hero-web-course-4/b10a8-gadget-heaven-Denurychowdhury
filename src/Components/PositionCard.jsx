/* eslint-disable react/prop-types */


const PositionCard = ({ bannerimg }) => {
    return (
        <div className=' -translate-y-1/4 md:mt-0 mt-5 '>
            <div className='md:w-3/5 mx-auto   rounded-lg md:p-4 p-2 border-2 border-gray-400'>
                <img className='rounded-lg md:h-[400px] w-full' src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default PositionCard;