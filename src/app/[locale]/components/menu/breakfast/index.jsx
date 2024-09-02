import Image from 'next/image';
import drink from "../../../../../static/media/img/drink.jpg";
import './index.scss';
const Breakfast = () => {
    return(
        <div className='breakfast-design'>
            <Image className="img" src={drink} alt={'drink'} width={700} height={900}  quality={100}  />
            hola
        </div>
    )
}

export default Breakfast;