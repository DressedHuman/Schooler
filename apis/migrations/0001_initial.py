# Generated by Django 5.0.2 on 2024-03-13 10:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=157)),
                ('parts', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group_name', models.CharField(max_length=57)),
                ('subject', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apis.subject')),
            ],
        ),
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_name', models.CharField(max_length=12)),
                ('class_value', models.PositiveSmallIntegerField()),
                ('groups', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apis.group')),
                ('common_subjects', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='apis.subject')),
            ],
        ),
    ]