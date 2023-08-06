from django.urls import path
from comments import views

urlpatterns = [
    # Endpoint to create a new comment
    path('create/', views.create_comment, name='create-comment'),
    # Endpoint to retrieve all comments for a specific video
    path('video/<str:video_id>/', views.get_comments_for_video, name='get-comments-for-video'),
    # I may add more endpoints for other comment-related functionality
]
