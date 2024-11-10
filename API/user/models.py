from django.db import models

class User(models.Model):
    name = models.CharField(blank=False,null=False,max_length=100)
    email = models.EmailField(blank=False,null=False)
    id_user = models.IntegerField(blank=False,null=False)
    current_balance = models.FloatField(blank=False,null=False)
    due_balance = models.FloatField(blank=False,null=False)


#creating the value of the table in sql