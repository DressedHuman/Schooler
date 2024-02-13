# api/urls.py
# importing necessary packages and modules
from django.urls import path
from . import views

urlpatterns = [
    path("hello", views.hello, name="hello"),
    path("homepage_data", views.homepage, name="homepage"),
    path("dashboard_data", views.dashboard_data, name="dashboard_data"),
    path("classes", views.classes, name="classes"),
    path("groups", views.groups, name="groups"),
    path("subjects", views.subjects, name="subjects"),
    path("subjects/<_class>", views.class_subjects, name="class_subjects"),
    path("subjects/<_class>/<group>", views.group_subjects, name="group_subjects"),
]
