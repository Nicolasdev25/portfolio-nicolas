# Portfólio do Nicolas

React + Vite.

## Como rodar no VS Code
1. Instale o Node.js (https://nodejs.org), versão LTS.
2. Abra esta pasta no VS Code (Arquivo > Abrir Pasta).
3. Abra o terminal (Ctrl + ') e rode:
   ```
   npm install
   npm run dev
   ```
4. Abra o endereço que aparecer (normalmente http://localhost:5173).

## Onde editar
- `src/App.jsx`: dados no topo do arquivo (`SKILLS`, `KNOW`, `PROJECTS`, `ROLES`) e `GITHUB`.
- `src/index.css`: estilos e cores (variáveis no começo).
- `src/assets/`: fotos. Para novo projeto, coloque a imagem aqui, importe no topo do `App.jsx` e use em `img:`.
- Em `PROJECTS`, preencha `link` (site no ar) e `repo` (GitHub) para ativar os botões.

## Publicar
`npm run build` gera a pasta `dist`. Para GitHub Pages, descomente `base` no `vite.config.js`.
