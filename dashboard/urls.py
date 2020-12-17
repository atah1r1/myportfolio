from django.urls import path

from .views import LoginView, AuthenticateCheck

app_name = 'dashboard'
urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logincheck/', AuthenticateCheck.as_view(), name='logincheck'),

]