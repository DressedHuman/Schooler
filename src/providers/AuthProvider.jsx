import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import FirstLoading from "../components/FirstLoading";
import logo from '../assets/logo.png';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [isFirstLoading, setFirstIsLoading] = useState(true);
    const [schoolName, setSchoolName] = useState('Schooler');
    const provide = { isFirstLoading, setFirstIsLoading, schoolName, setSchoolName, logo };

    useEffect(()=>{
        setSchoolName("Nautara Abiunnessa B.L. High School");
    }, []);

    return (
        <div>
            <AuthContext.Provider value={provide}>
                <FirstLoading>
                    {children}
                </FirstLoading>
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;