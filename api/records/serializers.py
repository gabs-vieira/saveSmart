from rest_framework import serializers
from records.models import Records

class RecordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Records
        fields = ["id", "value", "desc", "type", "method", "data"]

    def create(self, validated_data):
        record = Records.objects.create(
            value=validated_data["value"],
            desc=validated_data["desc"],
            type=validated_data["type"],
            method=validated_data["method"],
            data=validated_data["data"]
        )
        return record  # Return the created 'record' instance
