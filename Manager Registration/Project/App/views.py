from django.shortcuts import render, HttpResponse





def about(request):

    return render(request, "about.html")


def demo(request):

    return render(request, "demo.html")


def form(request):

   
    return render(request, "form.html")





def Registration(request):
    return render(request, "Registration.html")



def Login(request):
    return render(request, "Login.html")







