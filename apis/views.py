from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import models
from .serializers import SubjectsSerializer


@api_view(["GET"])
def info(req):
    info = {
        "name": "Motiur Rahman Mizan",
        "school": "Nautara Abiunnessa B.L. High School",
        "best_friend": "Md. Rukunuzzamana Golam Rabby",
        "loving": "Farhana Homayra",
    }
    return Response(info)


@api_view(["GET", "POST", "PUT", "PATCH", "DELETE"])
def subjects(req):
    if req.method == "GET":
        objs = models.Subjects.objects.all()
        serializer = SubjectsSerializer(objs, many=True)
        return Response(serializer.data)

    elif req.method == "POST":
        data = req.data
        serializer = SubjectsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif req.method == "PUT":
        data = req.data
        obj = models.Subjects.objects.get(id = data['id'])
        serializer = SubjectsSerializer(obj, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif req.method == "PATCH":
        data = req.data
        obj = models.Subjects.objects.get(id=data["id"])
        serializer = SubjectsSerializer(obj, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif req.method == 'DELETE':
        id = req.data['id']
        obj = models.Subjects.objects.get(id = id)
        obj.delete()
        return Response({'message': 'Subject Deleted Successfully'})