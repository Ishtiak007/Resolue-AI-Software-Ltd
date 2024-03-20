import { Link } from "react-router-dom";
import banner from '../assets/loginBanner.jpg'


const Banner = () => {
    return (
        <div>
            <div style={{ '--image-url': `url(${banner})` }}
                className='hero bg-[image:var(--image-url)] relative overflow-hidden rounded-b-md bg-no-repeat text-center h-[200px] lg:h-screen bg-cover'>
                <div className="absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-fixed bg-black bg-opacity-60">
                    <div className="w-full h-full flex justify-center items-center">
                        <Link to='/login'><button className='buttonProject3'>Login for Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;