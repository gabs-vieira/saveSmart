from django.db import models

class Spend(models.Model):
    description = models.CharField(blank=False,null=False)
    type_spend = models.CharField(blank=False,null=False)
    value = models.FloatField(blank=False,null=False)
    id_spend = models.IntegerField(blank=False,null=False,primary_key=True)
    date = models.DateField(blank=False,null=False)

#creating the value of the table in sql