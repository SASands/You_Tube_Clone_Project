# Generated by Django 4.0.4 on 2022-05-03 16:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('youtube_clone', '0002_remove_reply_comment_reply_comment_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reply',
            old_name='comment_id',
            new_name='comment',
        ),
    ]
