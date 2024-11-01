from django.db import models

from record.models import Record
from user.models import User



class OutputTable(models.Model):
    id_output = models.IntegerField(null=False,blank=False)
    id_record = models.ForeignKey(Record ,on_delete=models.CASCADE)


class UserOutput(models.Model):
    id_output = models.ForeignKey(OutputTable, on_delete=models.CASCADE)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)
    