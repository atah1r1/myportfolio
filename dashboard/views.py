from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_user
from django.contrib.auth import logout as logout_user
from rest_framework import views, generics, permissions, authentication
from rest_framework.response import Response

class CsrfExemptSessionAuthentication(authentication.SessionAuthentication):
    def enforce_csrf(self, request):
        return

class LoginView(views.APIView):
    permission_classes = [permissions.AllowAny]
    # authentication_classes = [CsrfExemptSessionAuthentication]
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
            return Response(status=200)

        return Response({'message': 'Invalid Username or Password'}, status=401)