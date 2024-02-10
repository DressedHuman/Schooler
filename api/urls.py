# api/urls.py
# importing necessary packages and modules
from django.urls import path
from . import views

urlpatterns = [
    path('hello', views.hello, name='hello'),
]