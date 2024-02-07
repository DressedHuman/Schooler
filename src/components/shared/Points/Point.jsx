import PropTypes from 'prop-types';
import listBullet from '/list/dots-bullet.svg';

const Point = ({ pointObj }) => {
    return (
        <li className={`list-none flex items-center gap-1`}>
            <img className='w-4 md:w-[18px] h-4 md:h-[18px]' src={listBullet} />
            <p>
                <span className='text-base md:text-lg font-semibold text-[#0C46C4]'>{pointObj.label || ''}:</span> <span className='text-[15px] md:text-[17px] font-medium'>{pointObj.description}</span>
            </p>
        </li>
    );
};

Point.propTypes = {
    pointObj: PropTypes.object,
}

export default Point;