function showInvitation() {
    const overlay = document.getElementById('overlay');
    const invitation = document.getElementById('invitation');
    overlay.classList.add('fade-out');
    setTimeout(() => {
        overlay.classList.add('hidden');
        invitation.classList.remove('hidden');
        invitation.classList.add('show');
    }, 1000); // La duración debe coincidir con la transición de la opacidad
}