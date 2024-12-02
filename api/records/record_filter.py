import django_filters
from records.models import Records


class RecordsFilter(django_filters.FilterSet):
    value = (
        django_filters.RangeFilter()
    )  # Permite buscar por faixas de valores (min, max)
    date = django_filters.DateFromToRangeFilter()  # Permite buscar por faixas de datas

    class Meta:
        model = Records
        fields = ["id", "value", "data", "type", "method"]
