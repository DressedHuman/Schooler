import { useState } from 'react';
import PropTypes from 'prop-types';

const InputLogoCircle = ({ logo, width, height, borderWidth, borderColor, padding, logoUp, logoUpMarginTop, onChange, photoRef }) => {
    const [uploadedImage, setUploadedImage] = useState(null);

    const containerStyle = {
        backgroundColor: 'rgb(51 65 85)',
        // width: `${radius}px`,
        // height: `${radius}px`,
        border: `${borderWidth}px solid ${borderColor || 'white'}`,
        padding: `${padding * 4}px`,
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result);
                // Call the onChange prop with the uploaded image data
                onChange && onChange(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <label className={`z-10 rounded-[50%] bg-white flex justify-center items-center ${width} ${height} ${logoUp && logoUpMarginTop}`} style={containerStyle}>
            <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
                ref={photoRef}
            />
            <img
                src={uploadedImage || logo}
                alt="School Name"
                className="w-full h-full object-cover rounded-[50%] cursor-pointer"
                draggable
            />
        </label>
    );
};

InputLogoCircle.propTypes = {
    logo: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    padding: PropTypes.number,
    logoUp: PropTypes.bool,
    logoUpMarginTop: PropTypes.string,
    onChange: PropTypes.func,
    photoRef: PropTypes.object,
};

export default InputLogoCircle;