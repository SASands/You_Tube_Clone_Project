from django.urls import path
from . import views


urlpatterns = [
    path('',views.get_all_comments_list),
    path('<int:pk>/', views.user_comment_detail),
    path('<int:pk>/', views.user_replies_detail),
]