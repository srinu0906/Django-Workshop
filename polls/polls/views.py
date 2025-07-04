from django.shortcuts import HttpResponse

def home(reqest):
    return HttpResponse("<h1>Home</h1><a href='dashboard'>Dashboard</a>")