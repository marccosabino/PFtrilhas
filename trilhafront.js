// home.js (partículas) - Se você tiver um arquivo home.js separado, certifique-se de que particles.js esteja inicializado lá ou copie o conteúdo para trilhafront.js

// Inicialização das partículas (se não estiver em um arquivo home.js global)
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#007bff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00aaff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


document.addEventListener('DOMContentLoaded', () => {
    const trailSteps = document.querySelectorAll('.trail-step');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const sidebarTitle = document.getElementById('sidebar-title');
    const sidebarContent = document.getElementById('sidebar-content');
    const sidebarResourcesList = document.getElementById('sidebar-resources-list');

    // Dados para os detalhes de cada etapa da trilha
    const stepDetails = {
        internet: {
            title: "Como a Internet Funciona",
            content: `
                <p>Para se tornar um desenvolvedor Front-end, é crucial entender a base da internet. Isso inclui:</p>
                <h4>Protocolos Essenciais:</h4>
                <ul>
                    <li><strong>HTTP/HTTPS:</strong> Como a comunicação entre navegador e servidor acontece.</li>
                    <li><strong>DNS:</strong> O sistema que traduz nomes de domínio em endereços IP.</li>
                </ul>
                <h4>Cliente-Servidor:</h4>
                <p>Compreenda a interação entre o navegador (cliente) solicitando informações e o servidor respondendo com os dados da página.</p>
                <h4>URLs e Requisições:</h4>
                <p>O que são URLs, como funcionam as requisições GET e POST, e o ciclo de vida de uma requisição web.</p>
            `,
            resources: [
                { name: "Mozilla Developer Network (MDN) - Como a Internet funciona", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP" },
                { name: "Alura - O que é HTTP?", link: "https://www.alura.com.br/artigos/o-que-e-http" },
                { name: "YouTube: Como a internet funciona - Curso em Vídeo", link: "https://www.youtube.com/watch?v=nl_JbBwJbJk" }
            ]
        },
        html: {
            title: "HTML5 e Semântica Web",
            content: `
                <p>O HTML (HyperText Markup Language) é a espinha dorsal de qualquer página web. Aprender HTML5 é fundamental para estruturar o conteúdo de forma eficaz.</p>
                <h4>Elementos Chave:</h4>
                <ul>
                    <li>Estrutura básica de um documento HTML (<code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>).</li>
                    <li>Tags de cabeçalho (<code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code>), parágrafos (<code>&lt;p&gt;</code>), listas (<code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>).</li>
                    <li>Links (<code>&lt;a&gt;</code>) e Imagens (<code>&lt;img&gt;</code>).</li>
                    <li>Tabelas (<code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>) e Formulários (<code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code>).</li>
                </ul>
                <h4>Semântica Web:</h4>
                <p>Utilize tags HTML que transmitam o significado do conteúdo (ex: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>) para melhorar a acessibilidade e o SEO.</p>
            `,
            resources: [
                { name: "MDN Web Docs - Introdução ao HTML", link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Introducao" },
                { name: "W3Schools - HTML Tutorial", link: "https://www.w3schools.com/html/" },
                { name: "Curso em Vídeo - HTML5 e CSS3", link: "https://www.youtube.com/playlist?list=PLHz_ArekSsLaFb0GBYADjge_L73gG_fL-" }
            ]
        },
        css: {
            title: "CSS3 e Design Responsivo",
            content: `
                <p>CSS (Cascading Style Sheets) é a linguagem utilizada para estilizar elementos HTML, controlando cores, fontes, layouts e muito mais.</p>
                <h4>Fundamentos do CSS:</h4>
                <ul>
                    <li>Seletores (classes, IDs, tags), propriedades e valores.</li>
                    <li>Modelo de Caixa (Box Model): margin, border, padding, content.</li>
                    <li>Cores (HEX, RGB, HSL), fontes (font-family, font-size, font-weight).</li>
                    <li>Backgrounds, sombras (box-shadow, text-shadow) e transições.</li>
                </ul>
                <h4>Layouts Modernos:</h4>
                <ul>
                    <li><strong>Flexbox:</strong> Para alinhamento e distribuição de itens em uma única dimensão (linha ou coluna).</li>
                    <li><strong>CSS Grid:</strong> Para layouts bidimensionais complexos (linhas e colunas), ideal para o layout geral da página.</li>
                </ul>
                <h4>Design Responsivo (Media Queries):</h4>
                <p>Crie layouts que se adaptam a diferentes tamanhos de tela (desktops, tablets, celulares) usando <code>@media</code> rules para aplicar estilos específicos baseados nas características do dispositivo.</p>
            `,
            resources: [
                { name: "MDN Web Docs - Aprenda CSS", link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Aprenda" },
                { name: "Flexbox Froggy (Jogo para aprender Flexbox)", link: "https://flexboxfroggy.com/#pt-br" },
                { name: "CSS Grid Garden (Jogo para aprender Grid)", link: "https://cssgridgarden.com/#pt-br" },
                { name: "Guia Completo de CSS-Tricks - Flexbox", link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
            ]
        },
        javascript: {
            title: "JavaScript Básico",
            content: `
                <p>JavaScript é a linguagem de programação que torna as páginas web interativas. É essencial para manipular o DOM, lidar com eventos e fazer requisições assíncronas.</p>
                <h4>Conceitos Fundamentais:</h4>
                <ul>
                    <li>Variáveis (<code>let</code>, <code>const</code>), tipos de dados (strings, numbers, booleans, arrays, objects).</li>
                    <li>Operadores (aritméticos, comparação, lógicos).</li>
                    <li>Estruturas de controle (<code>if/else</code>, <code>switch</code>), loops (<code>for</code>, <code>while</code>).</li>
                    <li>Funções (declaração, expressão, arrow functions).</li>
                </ul>
                <h4>Manipulação do DOM:</h4>
                <p>Aprenda a acessar e modificar elementos HTML e CSS usando JavaScript para criar interações dinâmicas.</p>
                <h4>Eventos:</h4>
                <p>Lide com eventos do usuário (clicks, teclado, mouse) para criar funcionalidades interativas.</p>
                <h4>Requisições Assíncronas (fetch API):</h4>
                <p>Como fazer chamadas a APIs para buscar dados sem recarregar a página (básico de <code>fetch</code> ou <code>XMLHttpRequest</code>).</p>
            `,
            resources: [
                { name: "MDN Web Docs - Guia JavaScript", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide" },
                { name: "FreeCodeCamp - JavaScript Algorithms and Data Structures", link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
                { name: "Codecademy - Learn JavaScript", link: "https://www.codecademy.com/learn/introduction-to-javascript" },
                { name: "Livro Eloquent JavaScript (Online)", link: "https://eloquentjavascript.net/" }
            ]
        },
        git: {
            title: "Git e Versionamento",
            content: `
                <p>Git é um sistema de controle de versão distribuído que permite rastrear alterações no código-fonte de um projeto e coordenar o trabalho entre vários desenvolvedores.</p>
                <h4>Comandos Essenciais do Git:</h4>
                <ul>
                    <li><code>git init</code>: Inicializa um novo repositório.</li>
                    <li><code>git add</code>: Adiciona arquivos à área de stage.</li>
                    <li><code>git commit</code>: Salva as alterações no histórico.</li>
                    <li><code>git status</code>: Verifica o status do repositório.</li>
                    <li><code>git log</code>: Visualiza o histórico de commits.</li>
                    <li><code>git branch</code>: Gerencia ramificações.</li>
                    <li><code>git checkout</code> / <code>git switch</code>: Muda de ramificação.</li>
                    <li><code>git merge</code>: Combina ramificações.</li>
                    <li><code>git pull</code> / <code>git push</code>: Sincroniza com repositórios remotos.</li>
                </ul>
                <h4>GitHub (ou GitLab/Bitbucket):</h4>
                <p>Plataformas de hospedagem de repositórios Git que facilitam a colaboração, revisão de código e gerenciamento de projetos.</p>
            `,
            resources: [
                { name: "Pro Git Book (Online e Gratuito)", link: "https://git-scm.com/book/pt-br/v2" },
                { name: "Atlassian Git Tutorial", link: "https://www.atlassian.com/git/tutorials" },
                { name: "DIO - Curso de Git e GitHub", link: "https://web.dio.me/tracks/git-e-github" },
                { name: "Try Git (Tutorial Interativo)", link: "https://try.github.io/levels/1/challenges/1" }
            ]
        },
        next_steps: {
            title: "Próximos Passos (Frameworks)",
            content: `
                <p>Após dominar os fundamentos de HTML, CSS e JavaScript, você estará pronto para explorar frameworks e bibliotecas que otimizam o desenvolvimento Front-end.</p>
                <h4>Escolha seu Framework:</h4>
                <ul>
                    <li><strong>React:</strong> Biblioteca JavaScript para construção de interfaces de usuário com foco em componentes. É amplamente usado e possui uma vasta comunidade.</li>
                    <li><strong>Vue.js:</strong> Framework progressivo, fácil de aprender e muito flexível, ótimo para projetos de pequeno a grande porte.</li>
                    <li><strong>Angular:</strong> Framework completo para construir aplicações web complexas e escaláveis, muito utilizado em grandes empresas.</li>
                </ul>
                <h4>Gerenciadores de Pacotes:</h4>
                <p>Familiarize-se com npm (Node Package Manager) ou Yarn para instalar e gerenciar dependências de projetos.</p>
                <h4>Ferramentas de Build:</h4>
                <p>Entenda o papel de Webpack, Vite ou Parcel para otimizar o código para produção.</p>
                <p>A escolha do framework dependerá dos seus objetivos e das demandas do mercado. É recomendado experimentar um pouco de cada para ver qual se adapta melhor ao seu estilo de aprendizado.</p>
            `,
            resources: [
                { name: "Documentação Oficial React", link: "https://react.dev/learn" },
                { name: "Documentação Oficial Vue.js", link: "https://vuejs.org/guide/introduction.html" },
                { name: "Documentação Oficial Angular", link: "https://angular.io/start" },
                { name: "Node.js (para npm)", link: "https://nodejs.org/en" }
            ]
        }
    };

    trailSteps.forEach(step => {
        step.addEventListener('click', () => {
            const stepId = step.dataset.step;
            const details = stepDetails[stepId];

            if (details) {
                sidebarTitle.textContent = details.title;
                sidebarContent.innerHTML = details.content;
                sidebarResourcesList.innerHTML = ''; // Limpa recursos anteriores

                details.resources.forEach(resource => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <div class="resource-icon">
                            <i class="${resource.link.includes('youtube.com') ? 'fab fa-youtube' : (resource.link.includes('github.com') ? 'fab fa-github' : (resource.link.includes('alura.com') || resource.link.includes('dio.me') ? 'fas fa-graduation-cap' : (resource.link.includes('w3schools') || resource.link.includes('mdn') ? 'fas fa-book' : 'fas fa-external-link-alt')))}"></i>
                        </div>
                        <div class="resource-info">
                            <h5>${resource.name}</h5>
                            <a href="${resource.link}" target="_blank" class="resource-link">Acessar</a>
                        </div>
                    `;
                    sidebarResourcesList.appendChild(listItem);
                });

                sidebar.classList.add('open');
            }
        });
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Fechar sidebar ao clicar fora dele (opcional, pode ser intrusivo em mobile)
    // document.addEventListener('click', (event) => {
    //     if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !event.target.closest('.trail-step')) {
    //         sidebar.classList.remove('open');
    //     }
    // });
});