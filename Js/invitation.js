// script.js
function showInvitation() {
    document.body.classList.remove('bg-cover');
    document.body.classList.add('bg-contain');
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('invitation').classList.remove('hidden');
}
