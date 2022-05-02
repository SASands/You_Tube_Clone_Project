from django.db import models
from django.forms import CharField


class Comment(models.Model):
    user = models.ForeignKey()
    video_id = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    likes = models.IntegerField()
    dislikes = models.IntegerField()

class Reply(models.Model):
    user = models.ForeignKey()
    comment = models.ForeignKey()
    text = CharField()