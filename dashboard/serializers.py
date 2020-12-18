from rest_framework import serializers
from info.models import Information, Project

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        # fields = '__all__'
        exclude = ['user']


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'