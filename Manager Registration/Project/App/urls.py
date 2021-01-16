

from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
    path("admin/", admin.site.register),
    path("About/", views.about, name="about us"),
  
  path("",views.Registration,name="Registration"),
   path("Login/",views.Login,name="Login"),
  
  
  
  
    
   

     
    
]
