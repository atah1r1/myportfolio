from django.conf import settings
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_user
from django.contrib.auth import logout as logout_user
from rest_framework import views, generics, response, permissions, authentication





class LoginView(views.APIView):
    permission_classes = [authentication.SessionAuthentication, authentication.BasicAuthentication]
    authentication_classes = [permissions.IsAuthenticated]

    def post(self, request):

        user = authenticate(
            username=request.POST.get('username'), 
            password=request.POST.get('password')
            )
        if user:
            login_user(request, user)
            return response.Response({'code': 200})

        return response.Response({'code': 401, 'message': 'Invalid Username or Password'})