from django.urls import path

from .views import (
    LoginView, 
    LogoutView, 
    ProfileView, 
    ProjectView, 
    OneProjectView,
    EducationView,
    )

app_name = 'dashboard'
urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('profile/', ProfileView.as_view(), name='profile'),

    path('projects/', ProjectView.as_view(), name='projects'),
    path('projects/<int:id>/', OneProjectView.as_view(), name='one_project'),

    path('education/', EducationView.as_view(), name='education'),
    path('education/<int:id>/', EducationView.as_view(), name='one_education'),

]