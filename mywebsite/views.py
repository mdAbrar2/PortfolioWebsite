from django.shortcuts import render




#views




def main(request):
    return render(request,'main.html')