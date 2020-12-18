
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings


from .views import ReactPages


urlpatterns = [
    path('', ReactPages, name='home'),
    path('login/', ReactPages, name='login'),
    path('dashboard/', ReactPages, name='dashboard'),

    path('api/', include('dashboard.urls')),

    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
