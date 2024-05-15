document.addEventListener('DOMContentLoaded', function() {
    if (window.Telegram.WebApp) {
        Telegram.WebApp.ready();
        
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
});