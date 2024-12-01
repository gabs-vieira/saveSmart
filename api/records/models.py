from django.db import models

class Records(models.Model):  # Corrected 'models.model' to 'models.Model'
    id = models.AutoField(primary_key=True)
    value = models.FloatField()
    desc = models.CharField(max_length=100, null=False, blank=False)
    type = models.BooleanField()
    method = models.CharField(max_length=20, null=False, blank=False)
    data = models.DateField(auto_now=True)

    def __str__(self):  # Corrected the method name to '__str__'
        return (
            f"ID: {self.id}, "
            f"Value: {self.value}, "
            f"Desc: {self.desc}, "
            f"Type: {self.type}, "
            f"Method: {self.method}, "
            f"Data: {self.data}"
        )

# Create your models here.
