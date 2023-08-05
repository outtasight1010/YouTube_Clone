# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-j!&=3&3o717j*-uiyyts8nh*rotosua+l0bu9y62@=fn_fd(5d'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'yt_clone_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PORT': '3306',
        'PASSWORD': 'password',
        'OPTIONS': {
            'autocommit': True
        }


    }
}