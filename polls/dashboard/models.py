from django.db import models

# Create your models here.
class Student(models.Model):
    student_id = models. IntegerField()
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    gender = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    mobile_number = models. IntegerField(max_length=10)
    branch = models.CharField(max_length=20)
    email = models. EmailField(unique=True)
    date_of_birth =models.DateField()