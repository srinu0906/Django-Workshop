from django.shortcuts import render
from .models import Student,Department
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import StudentSerializer
from django.http import JsonResponse

# Create your views here.

class ReactView(APIView):

   serializer_class = StudentSerializer

   #handle GET request
   def get(self,request):
      students = Student.objects.all().values()
      #serializer = StudentSerializer()
      return JsonResponse(request,{'students':list(students)})
   
   def post(self,request):
      serializer = StudentSerializer(data= request.data)
      if serializer.is_valid():
         serializer.save()
         return Response(serializer.data,status=status.HTTP_201_CREATED)
      return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



def dashboard(request):
   return render(request,'dashboard.html')

def students(request):
   students = Student.objects.all()
   return render(request, 'students.html', {"students":students})

def departments(request):
   departments = Department.objects.all()
   return render(request,'departments.html',{"departments":departments})



