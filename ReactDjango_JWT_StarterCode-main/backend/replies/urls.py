from django.urls import path
from replies import views

urlpatterns = [
    # Endpoint to create a new reply to a comment
    path('create/', views.create_reply, name='create-reply'),
    # Endpoint to retrieve all replies for a specific comment
    path('comment/<int:comment_id>/', views.get_replies_for_comment, name='get-replies-for-comment'),
    # I may add more endpoints for other reply-related functionality
]
