# api.views
from django.http import JsonResponse


def hello(req):
    return JsonResponse({
        'name' : 'Motiur Rahman Mizan',
        'address' : 'MasterPara, BurirHat, Khalisha Chapani, Dimla, Nilphamary',
        'age' : '21 years old',
        'high-school': 'Nautara Abiunnessa B.L. High School',
        'college' : 'Rangpur Government City College, Rangpur',
        'best-friend' : 'Md. Rukunuzzaman Golam Rabby',
        'interests': [
            'Programming',
            'Mathematics',
            'Physics',
            'Problem Solving',
            'Sudoku',
        ]
    })