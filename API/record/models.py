from django.db import models

class Record(models.Model):
    value = models.FloatField(blank=False,null=False)
    date = models.DateField(blank=False,null=False)
    id_record = models.IntegerField(blank=False,null=False,primary_key=True)
    record_type = models.CharField(blank=False,null=False,max_length=50)
    
