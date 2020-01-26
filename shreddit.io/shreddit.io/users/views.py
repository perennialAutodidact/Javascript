from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import  UserSignupForm, UserUpdateForm, ProfileUpdateForm
from chord_progressions.models import ChordProgression
from django.contrib.auth.models import User

def signup(request):
    if request.method == 'POST':
        form = UserSignupForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created! You can now login as {username}!')
            return redirect('login')
    else:
        form = UserSignupForm()

    return render(request, 'users/signup.html', {'form':form})

@login_required
def profile(request):
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST, 
                                   request.FILES, 
                                   instance=request.user.profile)

        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()

            messages.success(request, f'Your account has been updated!')
            return redirect('profile')
    else:
        # user = User.objects.get(pk=request.user.id)
        progressions = ChordProgression.objects.filter(creator=request.user)
        #request.user
        #ChordProgression.objects.get()
        #ChordProgression.objects.get(creator=request.user)

        print(f'PROGRESSIONS*** {request.user}')

        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'u_form':u_form,
        'p_form':p_form,
        'progressions':progressions,
    }
    return render(request, 'users/profile.html', context)

