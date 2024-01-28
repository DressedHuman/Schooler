import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import FirstLoading from "../components/Loader/FirstLoading";
import logo from '../assets/logo.png';
import Loader from "../components/Loader/Loader";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isFirstLoading, setFirstIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [schoolName, setSchoolName] = useState('Schooler');

    // provide all context values
    const provide = { isFirstLoading, setFirstIsLoading, isLoading, setIsLoading, schoolName, setSchoolName, logo };

    useEffect(()=>{
        setSchoolName("Nautara Abiunnessa B.L. High School");
    }, []);

    return (
        <div>
            <AuthContext.Provider value={provide}>
                {
                    isFirstLoading && <FirstLoading /> || <Loader>{children}</Loader>
                }
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;