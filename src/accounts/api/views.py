from rest_framework import generics, permissions
from django.contrib.auth.models import User
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
          "user": UserSerializer(
            user,
            context=self.get_serializer_context()
          ).data,
          "token": AuthToken.objects.create(user)[1]
        })


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
          "user": UserSerializer(
            user,
            context=self.get_serializer_context()
          ).data,
          "token": AuthToken.objects.create(user)[1]
        })


class UserView(generics.RetrieveAPIView):
    permission_classes = [
      permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_object(self, *args, **kwargs):
        return self.request.user
