import PropTypes from 'prop-types';
import Point from './Point';

const Points = ({ points }) => {
    return (
        <div className='font-open-sans flex flex-col gap-2'>
            {
                points.map(point => <Point key={point.id} pointObj={point} />)
            }
        </div>
    );
};

Points.propTypes = {
    points: PropTypes.array,
}

export default Points;