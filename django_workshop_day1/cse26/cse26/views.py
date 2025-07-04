from django.shortcuts import HttpResponse
from django.template import loader

posts = [
  {
    "id": 1,
    "title": "Introduction to Programming",
    "content": "Learn the basics of programming, including variables, loops, and functions."
  },
  {
    "id": 2,
    "title": "Web Development",
    "content": "Explore HTML, CSS, and JavaScript to build dynamic websites."
  },
  {
    "id": 3,
    "title": "Data Structures",
    "content": "Understand essential data structures such as arrays, linked lists, and trees."
  },
  {
    "id": 4,
    "title": "Database Management",
    "content": "Learn SQL and database design principles for efficient data handling."
  },
  {
    "id": 5,
    "title": "Machine Learning Basics",
    "content": "Discover foundational concepts of machine learning and its applications."
  }
]

def home(request):
   # htm = open("app/animate.html",'r')
    str1 = ''
    for p in posts:
        str1 += f'''
            Id - {p['id']} <br>
            Title - {p['title']}<br>
            Content- {p['content']}<br><br>'''
        
    str1 += "<a href='login'>Login</a><br><a href='register'>Register</a><br><a href='about'>About</a><br><a href='contact'>Contact</a>"
    return HttpResponse(str1)

def printJSON(request):
    str1 = f'''{posts}'''
    return HttpResponse(str1)

def login(request):
    htm = open('C:/Users/srinu/workspace/django_workshop/cse26/cse26/login.html','r')
    return HttpResponse(htm)

def register(request):
    return HttpResponse("<h1>Register Page</h1>")

def about(request):
    htm = open('C:/xampp/htdocs/Bingo/test/animate.html','r')
    return HttpResponse(htm)

def contact(request):
    template = loader.get_template('animate.html')
    return HttpResponse(template.render())