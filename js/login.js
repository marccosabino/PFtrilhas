document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 70, density: { enable: true, value_area: 800 } },
            color: { value: '#9d50bb' },
            shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#6e48aa', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', out_mode: 'out' }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const nicknameInput = document.getElementById('nickname');
    const passwordInput = document.getElementById('password');
    const keepLoginInput = document.getElementById('keep-login');
    const message = document.getElementById('login-message');

    function showMessage(text, isError) {
        message.textContent = text;
        message.style.color = isError ? '#ff7660' : '#aef1c5';
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const nickname = nicknameInput.value.trim();
        const password = passwordInput.value;

        if (!email || !nickname || !password) {
            showMessage('Preencha todos os campos.', true);
            return;
        }

        const user = { email: email, nickname: nickname };
        const keepLogin = !!keepLoginInput.checked;

        try {
            if (keepLogin) {
                localStorage.setItem('pf_keep_login', 'true');
                localStorage.setItem('pf_user', JSON.stringify(user));
            } else {
                sessionStorage.setItem('pf_keep_login', 'false');
                sessionStorage.setItem('pf_user', JSON.stringify(user));
            }
        } catch (e) {}

        showMessage('Login efetuado! Redirecionando...', false);
        setTimeout(() => {
            window.location.href = 'index.html#home';
        }, 800);
    });
});

