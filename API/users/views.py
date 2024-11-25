from rest_framework.viewsets import ModelViewSet # type: ignore
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import status, generics # type: ignore
from rest_framework.response import Response # type: ignore
from rest_framework.permissions import AllowAny # type: ignore
from rest_framework_simplejwt.tokens import RefreshToken # type: ignore
from rest_framework import serializers, status, generics # type: ignore
from django.contrib.auth import authenticate
from rest_framework.response import Response # type: ignore
from rest_framework.permissions import AllowAny # type: ignore


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]  # Permite acesso a todos (sem precisar estar logado)

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        return Response(
            {
                "message": "User registered successfully",
                "user": response.data
            },
            status=status.HTTP_201_CREATED
        )

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        
        # Autenticando o usuário
        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            return Response(
                {
                    'message': 'Login successful',
                    'access_token': access_token,
                },
                status=status.HTTP_200_OK,
            )
        else:
            return Response(
                {'message': 'Invalid credentials'},
                status=status.HTTP_400_BAD_REQUEST,
            )