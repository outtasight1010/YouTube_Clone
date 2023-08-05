from django.db import models
from django.conf import settings
from comments.models import Comment

class Reply(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.user.username} - {self.comment} - {self.text}"



