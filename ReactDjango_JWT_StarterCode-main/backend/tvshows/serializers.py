# tvshows/serializers.py

from rest_framework import serializers
from .models import Comment
from .models import Video
from .models import Reply

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user', 'video_id', 'text', 'likes', 'dislikes']

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['user', 'comment', 'text']





