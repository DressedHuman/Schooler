# api.views
from django.http import JsonResponse
from . import datas


def hello(req):
    return JsonResponse(
        {
            "name": "Motiur Rahman Mizan",
            "address": "MasterPara, BurirHat, Khalisha Chapani, Dimla, Nilphamary",
            "age": "21 years old",
            "high-school": "Nautara Abiunnessa B.L. High School",
            "college": "Rangpur Government City College, Rangpur",
            "best-friend": "Md. Rukunuzzaman Golam Rabby",
            "interests": [
                "Programming",
                "Mathematics",
                "Physics",
                "Problem Solving",
                "Sudoku",
            ],
        }
    )


# details needed in homepage
def homepage(req):
    return JsonResponse(datas.homepage_data, safe=False)


# dashboard data
def dashboard_data(req):
    return JsonResponse(datas.dashboard_data, safe=False)


# classes available in NABLHS
def classes(req):
    return JsonResponse(datas.classes, safe=False)


# groups available in NABLHS
def groups(req):
    return JsonResponse(datas.groups)


# subjects in NABLHS
def subjects(req):
    return JsonResponse(datas._subjects, safe=False)


# subjects in class in NABLHS
def class_subjects(req, _class):
    # all_subjects = datas._subjects
    # class_subjects = filter(lambda subject: _class in subject.classes, all_subjects)
    class_subjects = [
        subject for subject in datas._subjects if _class in subject["classes"]
    ]
    return JsonResponse(class_subjects, safe=False)


# subjects in group in class in NABLHS
def group_subjects(req, _class, group):
    _class_info = next(
        (_cls_info for _cls_info in datas.classes if _class == _cls_info["value"]), None
    )
    if _class_info['groups']['hasGroups'] and group in _class_info['groups']['groups']:
        subjects = [subject for subject in datas._subjects if _class in subject['classes'] and group in subject['groups']]
        return JsonResponse(subjects, safe=False)
    
    return JsonResponse({"message": f'Group {group} not available in class {_class}!'}, safe=False)
