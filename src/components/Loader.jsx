import { useContext, useEffect } from "react";
import SchoolLoader from "./SchoolLoader";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';

const Loader = ({ children }) => {
    const { isLoading, setIsLoading } = useContext(AuthContext);

    useEffect(() => {
        const unSubscribe = setTimeout(() => setIsLoading(false), 1775);

        return () => clearTimeout(unSubscribe);
    });
    
    return isLoading && (
        <div className="min-h-[100vh] min-w-[100vw] flex justify-center items-center">
            <SchoolLoader />
        </div>
    ) || children;
};

Loader.propTypes = {
    children: PropTypes.node,
}

export default Loader;