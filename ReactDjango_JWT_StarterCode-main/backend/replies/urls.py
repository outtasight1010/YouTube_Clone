from django.urls import path, include
from replies import views



urlpatterns = [
    path('', views.user_replies),
    path('all/', views.get_all_replies),
]

