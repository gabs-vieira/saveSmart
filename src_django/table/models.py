from django.db import models

class Table(models.Moldel):
    id_table = models.IntegerField(primary_key=True,null=False,blank=False)

#creating the value of the table in sql