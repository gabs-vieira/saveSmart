from django.db import models

from record.models import Record
from user.models import User


class InputTable(models.Model):
    id_input = models.IntegerField(null=False,blank=False)
    id_record = models.ForeignKey(Record ,on_delete=models.CASCADE)


class UserInput(models.Model):
    id_output = models.ForeignKey(InputTable, on_delete=models.CASCADE)
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)