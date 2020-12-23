from rest_framework import serializers
from info.models import (
    Information, 
    Project, 
    Education,
    Competence, 
    Experience,
    Message
    )

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        # fields = '__all__'
        exclude = ['user']


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'


class CompetenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competence
        fields = '__all__'


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        exclude = ['send_time']