import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import porridge from "../../../../../static/media/img/porridge.jpg";
import restaurant from "../../../../../static/media/img/restaurant.jpg";
import breakfast from "../../../../../static/media/img/breakfast.jpg";
import './index.scss';
const Breakfast = () => {
    return(
        <div className='breakfast-design'>
            <></>
            <div className="img-left">
                <div className="text">
                    <p>breakfast with us</p>
                    <HiOutlineArrowLongRight className="arrow" size={40}/>
                </div>
                <Image className="img" src={porridge} alt={'drink'} width={766} height={468}  quality={100}  />
            </div>
            <div className="img-right">
                <Image className="img" src={breakfast} alt={'drink'} width={468} height={766}  quality={100}  />
            </div>
            <div className="img-bottom">
                <Image className="img" src={restaurant} alt={'drink'} width={950} height={450}  quality={100}  />
            </div>
        </div>
    )
}

export default Breakfast;