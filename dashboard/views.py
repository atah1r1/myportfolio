from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_user
from django.contrib.auth import logout as logout_user

from rest_framework import views, generics, permissions, authentication
from rest_framework.response import Response
from rest_framework import status

from info.models import (
    Information, 
    Project, 
    Education, 
    Competence, 
    Experience, 
    Message
    )
from .serializers import (
    ProfileSerializer, 
    ProjectSerializer, 
    EducationSerializer,
    ExperienceSerializer,
    CompetenceSerializer,
    MessageSerializer
    )

class CsrfExemptSessionAuthentication(authentication.SessionAuthentication):
    def enforce_csrf(self, request):
        return


# we use this class to login and check the user if she/he logged in.
class LoginView(views.APIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = [CsrfExemptSessionAuthentication]
    def post(self, request):
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        
        if not username or not password:
            return Response({'message': 'Please enter both username and password'}, status=401)

        user = authenticate(
            username = username,
            password = password
            )
        if user:
            login_user(request, user)
            return Response({'message': 'Logged in Successfully'}, status=200)

        return Response({'message': 'Invalid Username or Password'}, status=401)

    def get(self, request):
            return Response({'authenticate': request.user.is_authenticated }, status=200)


# this is the logout class
class LogoutView(views.APIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def post(self, request):
        logout_user(request)
        return Response({'message': 'Logged out Successfully'}, status=200)


class ProfileView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request):
        profile = Information.objects.get(pk=1)
        profile = ProfileSerializer(profile)
        return Response(profile.data)
    
    def put(self, request):
        profile = Information.objects.get(user=request.user)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class OneProjectView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request, id):
        try:
            project = Project.objects.get(pk=int(id))
        except:
            return Response({'message': "Project matching query does not exist."}, status.HTTP_404_NOT_FOUND)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

    def put(self, request, id):
        try:
            project = Project.objects.get(pk=int(id))
        except:
            return Response({'message': "Project matching query does not exist."}, status.HTTP_404_NOT_FOUND)
        serializer = ProjectSerializer(instance=project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, id):
        try:
            project = Project.objects.get(pk=int(id))
            project.delete()
            return Response({'message': "Project Deleted Successfully"}, status.HTTP_200_OK)
        except:
            return Response({'message': "Project matching query does not exist."}, status.HTTP_404_NOT_FOUND)


class EducationView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request):
        educations = Education.objects.all()
        serializer = EducationSerializer(educations, many=True)
        return Response(serializer.data)


    def post(self, request):
        serializer = EducationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, id):
        try:
            education = Education.objects.get(pk=int(id))
        except:
            return Response({'message': "Education matching query does not exist."}, status.HTTP_404_NOT_FOUND)
        serializer = EducationSerializer(instance=education, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id):
        try:
            education = Education.objects.get(pk=int(id))
            education.delete()
            return Response({'message': "Education Deleted Successfully"}, status.HTTP_200_OK)
        except:
            return Response({'message': "Education matching query does not exist."}, status.HTTP_404_NOT_FOUND)


class CompetenceView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request):
        competences = Competence.objects.all()
        serializer = CompetenceSerializer(competences, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompetenceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, id):
        try:
            competence = Competence.objects.get(pk=int(id))
        except:
            return Response({'message': "Competence matching query does not exist."}, status.HTTP_404_NOT_FOUND)
        serializer = CompetenceSerializer(instance=competence, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id):
        try:
            competence = Competence.objects.get(pk=int(id))
            competence.delete()
            return Response({'message': "Competence Deleted Successfully"}, status.HTTP_200_OK)
        except:
            return Response({'message': "Competence matching query does not exist."}, status.HTTP_404_NOT_FOUND)


class ExperienceView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request):
        experiences = Experience.objects.all()
        serializer = ExperienceSerializer(experiences, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ExperienceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, id):
        try:
            experience = Experience.objects.get(pk=int(id))
        except:
            return Response({'message': "Experience matching query does not exist."}, status.HTTP_404_NOT_FOUND)
        serializer = ExperienceSerializer(instance=experience, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, id):
        try:
            experience = Experience.objects.get(pk=int(id))
            experience.delete()
            return Response({'message': "Experience Deleted Successfully"}, status.HTTP_200_OK)
        except:
            return Response({'message': "Experience matching query does not exist."}, status.HTTP_404_NOT_FOUND)


class MessageView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request, id=None):
        if not id == None:
            try:
                message = Message.objects.get(pk=int(id))
                serializer = MessageSerializer(message)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except:
                return Response({'message': "Message matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)

        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, id):
        try:
            message = Message.objects.get(pk=int(id))
            message.delete()
            return Response({'message': "Message Deleted Successfully"}, status=status.HTTP_200_OK)
        except:
            return Response({'message': "Message matching query does not exist."}, status=status.HTTP_404_NOT_FOUND)