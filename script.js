document.addEventListener('DOMContentLoaded', function() {
    if (window.Telegram.WebApp) {
        Telegram.WebApp.ready();

        // Получение информации о пользователе
        const user = Telegram.WebApp.initDataUnsafe.user;
        if (user) {
            console.log('Username:', user.username);
            console.log('First Name:', user.first_name);
            console.log('Last Name:', user.last_name);

            // Отображение информации на странице
            const userInfo = document.createElement('div');
            userInfo.innerHTML = `<p>Username: ${user.username || 'не указан'}</p>
                                  <p>First Name: ${user.first_name}</p>
                                  <p>Last Name: ${user.last_name}</p>`;
            document.body.insertBefore(userInfo, document.body.firstChild);
        }

        // Получение параметров темы
        const themeParams = Telegram.WebApp.themeParams;
        if (themeParams) {
            document.body.style.backgroundColor = themeParams.bg_color;
            document.body.style.color = themeParams.text_color;
            
            if (themeParams.button_text_color) {
                document.querySelectorAll('.file-upload input[type="file"]').forEach(function(input) {
                    input.style.color = themeParams.button_text_color;
                    input.style.backgroundColor = themeParams.button_color;
                });
            }
        }
    }

    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('Выбран файл:', file.name);
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const expandButton = document.getElementById('expandButton');
        const collapseButton = document.getElementById('collapseButton');
    
        if (window.Telegram.WebApp) {
            Telegram.WebApp.ready();
    
            expandButton.addEventListener('click', function() {
                Telegram.WebApp.expand();
                expandButton.style.display = 'none';
                collapseButton.style.display = 'inline';
            });
    
            collapseButton.addEventListener('click', function() {
                Telegram.WebApp.collapse();
                collapseButton.style.display = 'none';
                expandButton.style.display = 'inline';
            });
        }
    });
});