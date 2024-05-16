document.addEventListener('DOMContentLoaded', function() {
    if (window.Telegram.WebApp) {
        Telegram.WebApp.ready();

        // Получение информации о пользователе
        const user = Telegram.WebApp.initDataUnsafe.user;
        if (user) {
            console.log('Username:', user.username);
            console.log('First Name:', user.first_name);
            console.log('Last Name:', user.last_name);

            // Установка приветствия
            const greeting = `${user.first_name}, привет! Рад тебя видеть. В скором времени здесь ты сможешь отмечаться на паре, контролировать задание и расписание, а также получишь доступ к полезным материалам в рамках курса Вычислительное проектирование.`;
            document.getElementById('greeting').innerText = greeting;
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

    function openTab(evt, tabName) {
        var i, tabcontent, tabbuttons;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tabbuttons = document.getElementsByClassName("tab-button");
        for (i = 0; i < tabbuttons.length; i++) {
            tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector(".tab-button").click();
    });

    function load3DModel() {
        const container = document.getElementById('3d-model-container');
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const loader = new THREE.GLTFLoader();
        loader.load('Models/model.gltf', function (gltf) {
            scene.add(gltf.scene);
        }, undefined, function (error) {
            console.error(error);
        });

        const light = new THREE.AmbientLight(0xffffff, 1);
        scene.add(light);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }

    document.addEventListener("DOMContentLoaded", function() {
        load3DModel();
    });
});
