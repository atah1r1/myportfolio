from django.urls import path

from .views import (
    LoginView, 
    LogoutView, 
    ProfileView, 
    ProjectView, 
    OneProjectView,
    EducationView,
    CompetenceView,
    ExperienceView,
    MessageView
    )

app_name = 'dashboard'
urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),

    path('profile/', ProfileView.as_view(), name='profile'),

    path('projects/', ProjectView.as_view(), name='projects'),
    path('projects/<str:id>/', OneProjectView.as_view(), name='one_project'),

    path('education/', EducationView.as_view(), name='education'),
    path('education/<str:id>/', EducationView.as_view(), name='one_education'),

    path('competences/', CompetenceView.as_view(), name='competences'),
    path('competences/<str:id>/', CompetenceView.as_view(), name='one_competence'),

    path('experiences/', ExperienceView.as_view(), name='experiences'),
    path('experiences/<str:id>/', ExperienceView.as_view(), name='one_experience'),

    path('messages/', MessageView.as_view(), name='messages'),
    path('messages/<str:id>/', MessageView.as_view(), name='one_message'),

]