from django.urls import path
from . import views


urlpatterns = [
    path('info', views.info, name='info'),
    path('subjects', views.subjects, name='subjects'),
]