document.addEventListener('DOMContentLoaded', () => {

    const formManager = document.getElementById('formManager');
    const userName = document.getElementById('name');
    const userAvatar = document.getElementById('avatar');
    const userUsername = document.getElementById('username');
    const userPassword = document.getElementById('password');

    const instantFeedback = document.getElementById('instantFeedback');

    instantFeedback.style.display = 'none';

    const userManager = new User(); // instance/anak

    const now = new Date();
    const year = String(now.getFullYear());
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const nowDate = `${year}-${month}-${day}`;

    formManager.addEventListener('submit', (event) => {
        event.preventDefault();

        const userData = {
            name: userName.value,
            username: userUsername.value,
            avatar: userAvatar.value,
            password: userPassword.value,
            createdAt: nowDate,
        };

        const result = userManager.saveUsers(userData);

        if (result.success) {
            instantFeedback.style.display = 'none';
            // redirect to login page
            window.location.href = '../login.html';
        } 
        else {
            instantFeedback.style.display = 'flex';
            instantFeedback.textContent = result.error;
        }
    });
});
