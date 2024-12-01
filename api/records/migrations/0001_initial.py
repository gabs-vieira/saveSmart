# Generated by Django 5.1.3 on 2024-12-01 01:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Records',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('value', models.FloatField()),
                ('desc', models.CharField(max_length=100)),
                ('type', models.BooleanField()),
                ('method', models.CharField(max_length=20)),
                ('data', models.DateField(auto_now=True)),
            ],
        ),
    ]
