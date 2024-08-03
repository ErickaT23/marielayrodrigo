function showInvitation() {
    const body = document.body;
    const overlay = document.getElementById('overlay');
    const invitation = document.getElementById('invitation');

    overlay.classList.add('fade-out');
    setTimeout(() => {
        overlay.classList.add('hidden');
        body.classList.remove('bg-cover');
        body.classList.add('bg-contain');
        invitation.classList.remove('hidden');
        invitation.classList.add('show');
    }, 1000);
}