from django.urls import path

from .views import LoginView, ProfileView

app_name = 'dashboard'
urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),

]