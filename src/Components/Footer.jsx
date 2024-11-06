

const Footer = () => {
    return (
        <div className="bg-white">
            <div className='md:w-11/12 mx-auto  bg-white flex flex-col md:mt-10 mt-5 justify-center items-center py-11'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                    <p>Leading the way in Cutting age Technology</p>
                </div>
                <div className="divider"></div>
                <div className=" flex md:flex-row flex-col md:gap-16 gap-10 text-center p-10">
                    <div className='flex flex-col'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;