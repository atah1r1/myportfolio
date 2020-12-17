from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

from django.http import JsonResponse

from info.models import *


home = never_cache(TemplateView.as_view(template_name='index.html'))
login = never_cache(TemplateView.as_view(template_name='index.html'))
dashboard = never_cache(TemplateView.as_view(template_name='index.html'))



def api(request):
	info = list(Information.objects.all().values())[0]
	projects = list(Project.objects.all().values())
	educations = list(Education.objects.all().values())
	competences = list(Competence.objects.all().values())
	experiences = list(Experience.objects.all().values())

	return JsonResponse({
		'info': info,
		'projects': projects,
		'educations': educations,
		'competences': competences,
		'experiences': experiences,
		})
