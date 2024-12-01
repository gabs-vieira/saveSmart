from rest_framework.viewsets import ModelViewSet
from records.record_filter import RecordsFilter
from records.serializers import RecordsSerializer
from rest_framework.permissions import AllowAny
from records.models import Records
from django_filters.rest_framework import DjangoFilterBackend


class RecordViewSet(ModelViewSet):
    queryset = Records.objects.all()
    serializer_class = RecordsSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend]

    filterset_fields = RecordsFilter

    search_fields = ["type", "method"]
    ordering_fields = ["id", "value", "data"]
