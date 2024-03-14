# ________________________________________________________________________________

classes = [
    {
        "name": "Six",
        "value": "6",
        "groups": {
            "hasGroups": False,
            "groups": [
                {
                    "name": "None",
                    "id": "none",
                    "value": "none",
                },
                {
                    "name": "All",
                    "id": "all",
                    "value": "all",
                },
            ],
        },
    },
    {
        "name": "Seven",
        "value": "7",
        "groups": {
            "hasGroups": False,
            "groups": [
                {
                    "name": "None",
                    "id": "none",
                    "value": "none",
                },
                {
                    "name": "All",
                    "id": "all",
                    "value": "all",
                },
            ],
        },
    },
    {
        "name": "Eight",
        "value": "8",
        "groups": {
            "hasGroups": False,
            "groups": [
                {
                    "name": "None",
                    "id": "none",
                    "value": "none",
                },
                {
                    "name": "All",
                    "id": "all",
                    "value": "all",
                },
            ],
        },
    },
    {
        "name": "Nine",
        "value": "9",
        "groups": {
            "hasGroups": True,
            "groups": [
                {
                    "name": "Science",
                    "id": "science",
                    "value": "science",
                },
                {
                    "name": "Humanities",
                    "id": "humanities",
                    "value": "humanities",
                },
                {
                    "name": "Business Studies",
                    "id": "business-studies",
                    "value": "business-studies",
                },
                {
                    "name": "All",
                    "id": "all",
                    "value": "all",
                },
            ],
        },
    },
    {
        "name": "Ten",
        "value": "10",
        "groups": {
            "hasGroups": True,
            "groups": [
                {
                    "name": "Science",
                    "id": "science",
                    "value": "science",
                },
                {
                    "name": "Humanities",
                    "id": "humanities",
                    "value": "humanities",
                },
                {
                    "name": "Business Studies",
                    "id": "business-studies",
                    "value": "business-studies",
                },
                {
                    "name": "All",
                    "id": "all",
                    "value": "all",
                },
            ],
        },
    },
    {
        "name": "All",
        "value": "all",
        "groups": {
            "hasGroups": False,
            "groups": [
                {
                    "name": "Science",
                    "id": "science",
                    "value": "science",
                },
                {
                    "name": "Humanities",
                    "id": "humanities",
                    "value": "humanities",
                },
                {
                    "name": "Business Studies",
                    "id": "business-studies",
                    "value": "business-studies",
                },
                {
                    "name": "All",
                    "id": "all",
                    "value": "all",
                },
                {
                    "name": "None",
                    "id": "none",
                    "value": "none",
                },
            ],
        },
    },
]

# _________________________________________________________________________________


""" ------------------------------------------------------------------------------- """

# all subjects across classes and groups
_subjects = [
    # starting common subjects regardless of classes and groups
    {
        "name": "Bangla",
        "parts": 2,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "science",
            "humanities",
            "business-studies",
            "none",
        ],
    },
    {
        "name": "English",
        "parts": 2,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "science",
            "humanities",
            "business-studies",
            "none",
        ],
    },
    {
        "name": "General Mathematics",
        "parts": 1,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "science",
            "humanities",
            "business-studies",
            "none",
        ],
    },
    {
        "name": "Islam and Moral Studies",
        "parts": 1,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "science",
            "humanities",
            "business-studies",
            "none",
        ],
    },
    {
        "name": "Hinduism and Moral Studies",
        "parts": 1,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "science",
            "humanities",
            "business-studies",
            "none",
        ],
    },
    {
        "name": "ICT - Information and Communication Technology",
        "parts": 1,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "science",
            "humanities",
            "business-studies",
            "none",
        ],
    },
    # ended common subjects regardless of classes and groups
    # common subjects for some classes and groups
    {
        "name": "General Science",
        "parts": 1,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "humanities",
            "business-studies",
            "none",
        ],
    },
    # starting subjects for science group
    {
        "name": "Physics",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": [
            "science",
        ],
    },
    {
        "name": "Higher Mathematics",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": [
            "science",
        ],
    },
    {
        "name": "Chemistry",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": [
            "science",
        ],
    },
    {
        "name": "Biology",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": [
            "science",
        ],
    },
    # ended subjects for science group
    # starting subjects for humanities group
    {
        "name": "Economics",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": ["humanities"],
    },
    {
        "name": "History",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": ["humanities"],
    },
    {
        "name": "Civics",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": ["humanities"],
    },
    # starting subjects for business-studies group
    {
        "name": "Accounting",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": ["business-studies"],
    },
    {
        "name": "Business Entrepreneurship",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": ["business-studies"],
    },
    {
        "name": "Finance and Banking",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": ["business-studies"],
    },
    {
        "name": "Business Organization and Management",
        "parts": 1,
        "classes": ["9", "10"],
        "groups": ["business-studies"],
    },
    # ended subjects for business-studies group
    # no subject/for all classes and groups
    {
        "name": "No Subject",
        "parts": 0,
        "classes": [
            "6",
            "7",
            "8",
            "9",
            "10",
            "all",
        ],
        "groups": [
            "science",
            "humanities",
            "business-studies",
            "all",
            "none",
        ],
    },
]

""" ------------------------------------------------------------------------------- """


# _______________________________________________________________________________

# dashboard page's data here
dashboard_data = [
    {
        "id": 1,
        "name": "Attendance",
        "image": "/dashboard/attendance.png",
        "route": "/attendance",
    },
    {
        "id": 2,
        "name": "Homework",
        "image": "/dashboard/homework.png",
        "route": "/homework",
    },
    {
        "id": 3,
        "name": "Result",
        "image": "/dashboard/result.png",
        "route": "/result",
    },
    {
        "id": 4,
        "name": "Routine",
        "image": "/dashboard/routine.png",
        "route": "/routine",
    },
    {
        "id": 5,
        "name": "Solution",
        "image": "/dashboard/solution.png",
        "route": "/solution",
    },
    {
        "id": 6,
        "name": "Notice",
        "image": "/dashboard/notice.png",
        "route": "/notice",
    },
    {
        "id": 7,
        "name": "+Account",
        "image": "/dashboard/add_account.png",
        "route": "/add-account",
    },
]

# _______________________________________________________________________________


""" -------------------------------------------------------------------------------- """

# homepage data
homepage_data = [
    {
        "id": 1,
        "name": "Student",
        "image": "/student.svg",
        "userType": "student",
    },
    {
        "id": 2,
        "name": "Teacher",
        "image": "/teacher.svg",
        "userType": "teacher",
    },
    {
        "id": 3,
        "name": "Parent",
        "image": "/parent.svg",
        "userType": "parent",
    },
    {
        "id": 4,
        "name": "Guest",
        "image": "/guest.svg",
        "userType": "guest",
    },
]

""" --------------------------------------------------------------------------------- """
