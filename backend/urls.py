
from django.contrib import admin
from django.urls import path, include

from .views import home, login, dashboard

from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', home, name='home'),
    path('login/', login, name='login'),
    path('dashboard/', dashboard, name='dashboard'),

    # path('api/', api, name='api'),
    path('api/', include('dashboard.urls')),

    path('admin/', admin.site.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
