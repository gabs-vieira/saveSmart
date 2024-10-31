from django.db import models

class Balance(models.Model):
    first_date = models.DateField(null=False,blank=False)
    final_date = models.DateField(null=False, blank=False)
    value = models.FloatField(null=False,blank=False)
    id_balance = models.IntegerField(null=False,blank=False,primary_key=True)

#creating the value of the table in sql

