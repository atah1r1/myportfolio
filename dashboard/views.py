from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_user
from django.contrib.auth import logout as logout_user


from rest_framework import views, generics, permissions, authentication
from rest_framework.response import Response

from .serializers import ProfileSerializer

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
        serializer = ProfileSerializer()
        # if serializer.is_valid():
        #     serializer.save()
        return Response(serializer)
