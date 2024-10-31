from django.db import models

class User(models.Model):
    name = models.CharField(blank=False,null=False)
    email = models.EmailField(blank=False,null=False)
    id_user = models.IntegerField(blank=False,null=False)

#creating the value of the table in sql