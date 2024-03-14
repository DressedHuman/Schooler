from django.db import models

# Create your models here.
class Subject(models.Model):
    name = models.CharField(max_length=157)
    parts = models.PositiveSmallIntegerField()


class Group(models.Model):
    group_name = models.CharField(max_length=57)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)

    def __str__(self):
        return self.group_name


class Class(models.Model):
    class_name = models.CharField(max_length=12)
    class_value = models.PositiveSmallIntegerField()
    common_subjects = models.ForeignKey(Subject, on_delete=models.CASCADE)
    groups = models.ForeignKey(Group, on_delete=models.CASCADE)