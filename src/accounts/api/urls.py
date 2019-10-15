from django.urls import path, include
from knox import views as knox_view
from .views import RegisterView, UserView, LoginView


urlpatterns = [
    path(
        'api/auth',
        include('knox.urls'),
        name='knox_urls'
    ),
    path(
        'api/auth/register',
        RegisterView.as_view(),
        name='register'
    ),
    path(
        'api/auth/login',
        LoginView.as_view(),
        name='login'
    ),
    path(
        'api/auth/user',
        UserView.as_view(),
        name='knox_user'
    ),
    path(
        'api/auth/logout',
        knox_view.LogoutView().as_view(),
        name='logout'
    ),
]
