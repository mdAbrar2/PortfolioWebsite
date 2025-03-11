from mywebsite.wsgi import application  # Import your Django app's WSGI application

# Vercel needs this variable to serve the app
app = application
