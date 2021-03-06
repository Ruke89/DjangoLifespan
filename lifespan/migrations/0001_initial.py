# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-12-09 21:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country_name', models.CharField(max_length=200)),
                ('country_code', models.CharField(max_length=4)),
            ],
        ),
        migrations.CreateModel(
            name='Rate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rate_type', models.CharField(max_length=200)),
                ('rate', models.DecimalField(decimal_places=3, max_digits=6)),
                ('year', models.DateField(verbose_name='data_date')),
                ('country', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='lifespan.Country')),
            ],
        ),
    ]
