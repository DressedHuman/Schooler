import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import FirstLoading from "../components/Loader/FirstLoading";
import logo from '/logo-20240201=233819_resized.png';
import Loader from "../components/Loader/Loader";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isFirstLoading, setFirstIsLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [schoolName, setSchoolName] = useState('Schooler');

    // all classes
    const classes = [
        6,
        7,
        8,
        9,
        10,
        'All'
    ]

    // all groups according to classes
    const groups = {
        6: {
            hasGroups: false,
            groups: ['None', 'All'],
        },
        7: {
            hasGroups: false,
            groups: ['None', 'All'],
        },
        8: {
            hasGroups: false,
            groups: ['None', 'All'],
        },
        9: {
            hasGroups: true,
            groups: ['Science', 'Humanities', 'Business Studies', 'All'],
        },
        10: {
            hasGroups: true,
            groups: ['Science', 'Humanities', 'Business Studies', 'All'],
        },
        'All': {
            hasGroups: false,
            groups: ['Science', 'Humanities', 'Business Studies', 'All', 'None'],
        },
    }

    // all subjects with other vital informations
    const subjects = [
        // starting common subjects regardless of classes and groups
        {
            'name': 'Bangla',
            'parts': 2,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Science', 'Humanities', 'Business Studies', 'None'],
        },
        {
            'name': 'English',
            'parts': 2,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Science', 'Humanities', 'Business Studies', 'None'],
        },
        {
            'name': 'General Mathematics',
            'parts': 1,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Science', 'Humanities', 'Business Studies', 'None'],
        },
        {
            'name': 'Islam and Moral Studies',
            'parts': 1,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Science', 'Humanities', 'Business Studies', 'None'],
        },
        {
            'name': 'Hinduism and Moral Studies',
            'parts': 1,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Science', 'Humanities', 'Business Studies', 'None'],
        },
        {
            'name': 'ICT - Information and Communication Technology',
            'parts': 1,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Science', 'Humanities', 'Business Studies', 'None'],
        },
        // ended common subjects regardless of classes and groups

        // common subjects for some classes and groups
        {
            'name': 'General Science',
            'parts': 1,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Humanities', 'Business Studies', 'None'],
        },

        // starting subjects for science group
        {
            'name': 'Physics',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Science'],
        },
        {
            'name': 'Higher Mathematics',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Science'],
        },
        {
            'name': 'Chemistry',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Science'],
        },
        {
            'name': 'Biology',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Science'],
        },
        // ended subjects for science group

        // starting subjects for humanities group
        {
            'name': 'Economics',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Humanities'],
        },
        {
            'name': 'History',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Humanities'],
        },
        {
            'name': 'Ceivics',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Humanities']
        },

        // starting subjects for business studies group
        {
            'name': 'Accounting',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Business Studies']
        },
        {
            'name': 'Business Entrepreneurship',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Business Studies'],
        },
        {
            'name': 'Finance and Banking',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Business Studies'],
        },
        {
            'name': 'Business Organization and Management',
            'parts': 1,
            'classes': [9, 10],
            'groups': ['Business Studies'],
        },
        // ended subjects for business studies group

        // no subject/for all classes and groups
        {
            'name': 'No Subject',
            'parts': 0,
            'classes': [6, 7, 8, 9, 10, 'All'],
            'groups': ['Science', 'Humanities', 'Business Studies', 'All', 'None'],
        }
    ];

    // provide all context values
    const provide = { isFirstLoading, setFirstIsLoading, isLoading, setIsLoading, schoolName, setSchoolName, logo, classes, groups, subjects };

    useEffect(() => {
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