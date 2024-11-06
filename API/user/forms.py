from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class LoginForm(forms.Form):
    email = forms.EmailInput(max_length=100,widget=forms.EmailInput)
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta: 

class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    name = forms.CharField(max_length=100, required=True)
    
    class Meta:
        model = User
        fields = ['username', 'name', 'email', 'password1', 'password2']
