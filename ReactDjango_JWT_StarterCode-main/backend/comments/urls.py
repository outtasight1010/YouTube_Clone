from django.urls import path, include
from comments import views
from .views import create_comment

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_comments),
    path('all/', views.get_all_comments),
    path('create/', create_comment, name='create-comment')
]

