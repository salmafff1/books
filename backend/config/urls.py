from django.contrib import admin
from django.http import HttpResponse
from django.urls import path

def home_view(request):
    return HttpResponse("Bienvenue sur Book Review Platform !")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view),  # Ajout d’une vue simple à la racine
]
