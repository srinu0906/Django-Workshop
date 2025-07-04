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

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    
class Department(models.Model):
    department_id = models.CharField(max_length=5)
    department_name = models.CharField(max_length=50)
    department_hod = models.CharField(max_length=100)
    department_details = models.CharField(max_length=250)
    number_of_employees = models.IntegerField(null=True)

    def __str__(self):
        return f'{self.department_id} {self.department_name}'