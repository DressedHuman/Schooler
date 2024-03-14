from rest_framework import serializers
from . import models
from string import ascii_letters


class SubjectsSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Subject
        fields = ["id", "name", "parts", "classes", "groups"]

    # validation method for validation all instances
    def validate(self, data):
        if data['parts'] < 0:
            raise serializers.ValidationError('parts can not be less than 0')
        elif data['parts'] > 7:
            raise serializers.ValidationError('parts can not be greater than 7')
        return data

    # validate target instance
    def validate_name(self, data):
        if any(c not in ascii_letters + " " for c in data):
            raise serializers.ValidationError(
                "name must use only letters and whitespace"
            )
        return data

    def validate_classes(self, data):
        if not len(data):
            raise serializers.ValidationError(
                "subject must available at least one class"
            )
        return data
    
    def validate_groups(self, data):
        if any(type(group)!=type('') for group in data):
            raise serializers.ValidationError('group names must be of letters and whitespaces')
        elif any(c not in ascii_letters+" " for group in data for c in group):
            raise serializers.ValidationError('group names must use only letters or whitespaces if need')
        return data