from django.db import models
from authentication.models import User

# Create your models here.

class Video(models.Model):
    title = models.CharField(max_length=300)
    description = models.CharField(max_length=300)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video_id = models.CharField(max_length=100)
    text = models.CharField(max_length=1000)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)

    def __string__(self):
        return f'{self.user.username} - {self.video_id}: {self.text}'
    
class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete= models.CASCADE)
    text = models.CharField(max_length=1000)



