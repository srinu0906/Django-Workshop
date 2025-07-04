# Django Workshop Projects

This repository contains sample Django applications built during a Django workshop. These mini-projects were created for learning purposes, covering fundamental concepts like models, views, templates, forms, admin panel, and authentication.

---

## Getting Started

###  Prerequisites

* Python 3.8 or higher
* [pip](https://pip.pypa.io/en/stable/)
* [virtualenv](https://virtualenv.pypa.io/en/latest/)

---

###  Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Create a virtual environment and activate it**

   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations**

   ```bash
   python manage.py migrate
   ```

5. **Create a superuser**

   ```bash
   python manage.py createsuperuser
   ```

---

##  Project Structure

```
Django-Workshop/
├── <main_project_folder>/
│   ├── settings.py
│   ├── urls.py
│   └── ...
├── <app_folders>/
├── requirements.txt
├── manage.py
└── README.md
```

* `<main_project_folder>`: Django project configuration and settings
* `<app_folders>`: Individual apps created during the workshop

---

##  Running the Application

Start the development server:

```bash
python manage.py runserver
```

Visit: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

## Useful Commands

```bash
python manage.py makemigrations     # Create migrations
python manage.py migrate            # Apply migrations
python manage.py createsuperuser    # Create admin user
python manage.py runserver          # Start development server
```

---

## Features (Optional)

* Admin interface setup
* Custom models and views
* Forms and validations
* Template rendering and static files
* URL routing and app modularization

---

## License

This project was created as part of a Django workshop for educational purposes. You may reuse it for learning or personal experimentation.

---

