<div align="center">

<img src="src/assets/foto-nicolas.jpg" alt="Foto de Nicolas" width="150" style="border-radius:50%" />

# 👋 Portfólio | Nicolas

Meu portfólio pessoal, feito com **React** e **Vite**.
Reúne quem eu sou, as tecnologias que estudo, os projetos que já desenvolvi e as formas de entrar em contato.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

> Estou em transição de carreira para a área de tecnologia, cursando Engenharia de Software e em busca de uma vaga de **Emprego em Desenvolvimento de Software / Frontend**.

## 🖥️ Prévia

<p align="center">
  <img src="/src/docs/preview.png" alt="Prévia do portfólio" width="800" />
</p>

## 🔗 Links

<p>
  <a href="https://github.com/Nicolasdev25"><img src="https://img.shields.io/badge/GitHub-Nicolasdev25-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/nicolas-leao"><img src="https://img.shields.io/badge/LinkedIn-nicolas--leao-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://www.instagram.com/nicolasnleao"><img src="https://img.shields.io/badge/Instagram-nicolasnleao-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
</p>

## ✨ Funcionalidades

- Seções de **Início**, **Sobre mim**, **Tecnologias**, **Projetos** e **Contato**
- **Barra de navegação** com links para cada seção e destaque da seção atual
- **Menu hambúrguer** no celular
- **Tema claro e escuro** (respeita a preferência do sistema e pode ser alternado no botão do topo)
- **Cards de projetos** com foto, tecnologias e **modal de detalhes** com links para o site e o código
- Chips de conhecimentos clicáveis
- Ícones das redes sociais em SVG (sem bibliotecas externas)
- Layout **responsivo** (celular, tablet e computador)

## 🚀 Projetos em destaque

### 📖 Landing Page – Cuide-se

<img src="src/assets/projeto-cuide-se.jpg" alt="Landing Page Cuide-se" width="600" />

Landing page moderna e responsiva para a divulgação e venda de um e-book.

**Tecnologias:** HTML, CSS · [Ver código](https://github.com/Nicolasdev25/landing-page-dr-luiz-cuide-se)

---

### 🔭 Astro OBS

<img src="src/assets/projeto-astro-obs.jpg" alt="Astro OBS" width="600" />

Plataforma de astronomia que conecta entusiastas do espaço aos eventos astronômicos do momento, com design _Cosmic Deep Space_ e foco em dispositivos móveis. Feito para o curso de HTML e CSS do OXETECH.

**Tecnologias:** HTML5, CSS3, GitHub Pages · [Ver código](https://github.com/Nicolasdev25/Projeto-Astronomia)

---

### 🪙 App – GiroCoin

<img src="src/assets/GiroCoin.png" alt="App GiroCoin" width="600" />

Aplicativo para compra de coins e venda de itens de jogos online, com foco em Tibia.

**Tecnologias:** React Native, Figma · [Ver código](https://github.com/Nicolasdev25/giroCoin)

## 📁 Estrutura do projeto

```
portfolio-nicolas/
├── index.html
├── package.json
├── vite.config.js
├── docs/               # prévia do site para o README
└── src/
    ├── main.jsx        # ponto de entrada do React
    ├── App.jsx         # componentes e dados do portfólio
    ├── index.css       # estilos e variáveis de tema
    └── assets/         # foto de perfil e imagens dos projetos
```

## 💻 Como rodar localmente

**Pré-requisito:** [Node.js](https://nodejs.org) (versão LTS).

```bash
# 1. Clone o repositório
git clone https://github.com/Nicolasdev25/NOME-DO-REPOSITORIO.git

# 2. Entre na pasta
cd NOME-DO-REPOSITORIO

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

### Outros comandos

| Comando           | O que faz                                 |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento      |
| `npm run build`   | Gera a versão de produção na pasta `dist` |
| `npm run preview` | Visualiza localmente a versão de produção |

## ✏️ Como personalizar

Os dados ficam no topo do arquivo `src/App.jsx`:

- `SKILLS`: tecnologias principais e nível de cada uma
- `KNOW`: lista de conhecimentos (chips)
- `PROJECTS`: projetos do portfólio
- `SOCIALS`: links das redes sociais

Para **adicionar um projeto**:

1. Coloque a imagem em `src/assets/` e importe no topo do `App.jsx`.
2. Acrescente um novo item em `PROJECTS`:

```jsx
{
  t: "Nome do projeto",
  d: "Descrição curta do projeto.",
  tags: ["HTML", "CSS"],
  cat: "Web",
  img: minhaImagem,
  g: ["#58a6ff", "#a371f7"],
  link: "https://link-do-projeto-no-ar",
  repo: "https://github.com/Nicolasdev25/nome-do-repo",
}
```

As cores e o tema são controlados pelas variáveis CSS no começo de `src/index.css`.

## 🌐 Publicação (GitHub Pages)

1. No `vite.config.js`, defina o `base` com o nome do repositório:
   ```js
   base: "/NOME-DO-REPOSITORIO/",
   ```
2. Gere a versão de produção:
   ```bash
   npm run build
   ```
3. Publique o conteúdo da pasta `dist` no GitHub Pages (por exemplo, com o pacote `gh-pages` ou com uma GitHub Action).

Também é possível publicar em serviços como Vercel ou Netlify. Nesse caso, não é necessário definir o `base`.

## 📬 Contato

Aberto a oportunidades de estágio em Desenvolvimento de Software / Frontend. Fale comigo pelo [LinkedIn](https://www.linkedin.com/in/nicolas-le%C3%A3o-4964203b0?utm_source=share_via&utm_content=profile&utm_medium=member_android) ou pelo [Instagram](https://www.instagram.com/nicolasnleao).

---

<div align="center">

Feito com ⚛️ por [Nicolas](https://github.com/Nicolasdev25)

</div>
