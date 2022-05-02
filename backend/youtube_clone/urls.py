from django.urls import path
from . import views


urlpatterns = [
    path('',views.get_all_comments_list),
    path('comment/', views.user_comment_detail),
    path('comment/<int:pk>/', views.get_comment_by_id),
    path('replies/', views.user_replies_detail),
]