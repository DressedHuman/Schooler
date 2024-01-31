import Button from '../FormComponents/Button';
import InputField from '../FormComponents/inputField';
import userIcon from '/login/userIcon.svg';
import passwordIcon from '/login/password.svg';
import PropTypes from 'prop-types';

const LoginForm = ({ handleLogin }) => {
    return (
        <form onSubmit={handleLogin} className="w-1/2 md:w-1/3 mx-auto text-center">
            {/* userid field here */}
            <InputField type={'text'} name={'UserId'} nameText={'UserId'} id={'userId'} placeholder={'FM1057'} icon={userIcon} />

            {/* password field here */}
            <InputField type={'password'} name={'password'} nameText={'Password'} id={'password'} placeholder={'Password'} icon={passwordIcon} marginTop={'43px'} marginBottom={'90px'} />

            {/* login button here */}
            <Button type={'submit'} name={'login'} nameText={'Login'} />
        </form>
    );
};

LoginForm.propTypes = {
    handleLogin: PropTypes.func,
}

export default LoginForm;