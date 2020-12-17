from rest_framework import serializers
from info.models import Information

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = '__all__'