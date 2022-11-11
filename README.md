_Novembro de 2022_

**_Em desenvolvimento_**

## **Pré-requesitos**

- Entendimento de **Inglês**, fala e escrita.

- Conhecimento de como usar **alguma** linguagem de programação.

### **As seguintes ferramentas instaladas:**

- **NVM**: Para facilitar o uso e a mudança de versões de Node : [Como usar](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)
- **Node**: v16.18.1 (por dependência no projeto atual)

- **NPM**: latest

- **YARN**: latest

- **Editor de codigo: VSCode**, caso queira usar outro editor terá que achar como utilizar as extenções.

Extenções para o VSCode

**_Essenciais:_**

- Sass
- Prettier
- ESLint
- Auto Complete Tag
- Auto Close Tag
- Auto Rename Tag
- Vue.js Extension Pack
- vuetify-vscode

**_Opcionais:_**

- vscode-icons
- Live Server
- GitLens — Git supercharged
- gitflow
- CSS Peek

---

### **Ferramentas de ajuda online:**

- [CodeSandbox.io](https://codesandbox.io/), na minha opinião o melhor ambiente de programação online, usado para testes, protótipos e compartilhamento de código, com suporte a instalação de dependências e aos principais frameworks.

### **Links de suporte:**

[Roadmap completo de web, não é preciso saber tudo agora(para estudo futuro, curiosidade)](https://roadmap.sh/frontend)

[Melhor fonte de info web, varias tecnologias](https://developer.mozilla.org/en-US/)

[Checar se uma tecnologia tem suporte no navegador](https://caniuse.com/)

**Ter em mente, estudo mais avançado:**

[Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

# 0. Programação, o pesquisador e o compartilhador

Toda a internet e programação em geral evolui a base do compartilhamento, um bom programador não é só aquele que aprende, mas aquele que tambem compartilha o que aprendeu.

# 1. A Web

Começamos com como um navegador funciona e os protocolos de transferencia

**Navegadores**

Como funcionam

[https://web.dev/howbrowserswork/](https://web.dev/howbrowserswork/)

[https://hackernoon.com/how-do-web-browsers-work-40cefd2cb1e1](https://hackernoon.com/how-do-web-browsers-work-40cefd2cb1e1)

_Web Storage_

[Tipos e diferencas](https://www.google.com/search?pws=0&q=browser+data+storage+types)

**HTTP/S**

Todos site ao ser acessado faz uma chamada GET automaticamente para trazer os dados

Para que serve, como funciona:

[https://howhttps.works/](https://howhttps.works/)

[https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

[https://www.youtube.com/watch?v=iYM2zFP3Zn0](https://www.youtube.com/watch?v=iYM2zFP3Zn0)

Como navegadores funcionam, [video](https://www.youtube.com/watch?v=WjDrMKZWCt0), [artigo](https://web.dev/howbrowserswork/), [populando uma pagina](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)

**As linguagens da web**

HTML e CSS não são linguagens

Tudo na web possui uma padronizacao documentada, HTML = [HTML5](https://www.infowester.com/introhtml5.php), [JS](https://www.treinaweb.com.br/blog/qual-a-diferenca-entre-ecmascript-e-javascript), [CSS](https://www.w3.org/Style/CSS/#specs), porem mesmo qunado alguma parte da linguagem sai de uso ela continua funcional por _Backward compatibility_.

[Porque componentes HTML saem de circulação](https://css-tricks.com/why-do-some-html-elements-become-deprecated/)

O browser consegue interpretar praticamente todo html, quebrado, ruim ou fora de uso, como por exemplo a pagina principal do google, que possui html que saiu de uso a anos, porém como o foco é em optimizacao eles preferem manter codigo fora de data para não aumentar o tamanho da pagina.

---

# 2. Pão com água, a.k.a HTML, CSS, JS (seu upgrade: TS)

[Algums livros de introdução bacana](https://github.com/gustavoguanabara/html-css/tree/master/aulas-pdf)

### **Bases:**

HTML

- [docs](https://www.w3schools.com/html/default.asp)

CSS

- [Basico de CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [docs](https://www.w3schools.com/css/default.asp)
- [Css mais explicativo](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
- [Ótima fonte de css e seus tricks e truques](https://css-tricks.com/)
- [Dicas de CSS](https://www.youtube.com/kepowob)

JS

- [Tutorial de JS](https://www.youtube.com/watch?v=q8SHaDQdul0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr)
- [docs](https://www.w3schools.com/js/default.asp)
- [Js mais explicativo](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

TS

- [Introdução ao Typescript](https://www.youtube.com/watch?v=5_RIHHpQcoM&list=PLFzsFUO-y0HA8cL6w2RxAJoiznkae7uV_)

Conceitos essenciais:

- HTML

[Forms](https://web.dev/learn/forms/)  
[Table](https://www.w3schools.com/html/html_tables.asp) ([mais info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics))  
[Dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) ([tutorial](https://www.youtube.com/watch?v=TAB_v6yBXIE))

Semântica, boas praticas  
 [https://developer.mozilla.org/en-US/docs/Glossary/Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)  
 [https://www.freecodecamp.org/news/html-best-practices/](https://www.freecodecamp.org/news/html-best-practices/)  
 [https://hackernoon.com/how-to-write-semantic-html-dkq3ulo](https://hackernoon.com/how-to-write-semantic-html-dkq3ulo)

- CSS

[Selectors](https://www.w3schools.com/csSref/css_selectors.php)  
[Margin](https://www.w3schools.com/csSref/pr_margin.php)  
[Padding](https://www.w3schools.com/csSref/pr_padding.php)  
[Border](https://www.w3schools.com/csSref/pr_border.php)  
[Grid](https://www.w3schools.com/csSref/pr_grid.php)  
[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- JS

[Promises](https://www.youtube.com/watch?v=QO4NXhWo_NM&list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx)  
[Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)

**Alguns projetos para treino**

[https://dev.to/theme_selection/front-end-project-examples-for-beginners-48i7](https://dev.to/theme_selection/front-end-project-examples-for-beginners-48i7)

---

# 3. Frameworks, Le Vue, Le Nuxt

Atualmente usamos o **Nuxt2**, então esse material foca em nuxt2 com algumas fontes de vue2 e outras de vue3 (nuxt3 não lançado oficialmente ainda)

[O que é um framework](https://www.freecodecamp.org/news/what-is-a-framework-software-frameworks-definition/)

- Vue

[Resumo de Vue](https://www.youtube.com/watch?v=nhBVL41-_Cw)  
[Tutorial de vue](https://www.youtube.com/watch?v=FXpIoQ_rT_c)  
[Documentação vue2](https://v2.vuejs.org/v2/guide/index.html)

- Nuxt

[Explicação simplificada do Nuxt](https://www.youtube.com/watch?v=l2y8oYqNV8I)

[Documentação do nuxt2](https://nuxtjs.org/docs/get-started/installation/)

[Intro do Nuxt2](https://www.youtube.com/watch?v=IRKx97XfiYI&list=PLtIMuymsF0jcsFDIAq6fGGU2kuOFrFPSm&index=1)

[Curso introdutorio de nuxt](https://www.youtube.com/watch?v=IRKx97XfiYI&list=PLtIMuymsF0jcsFDIAq6fGGU2kuOFrFPSm)

[SandBox de Nuxt](https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/?file=/pages/index.vue)

**[Porque o nuxt](https://cubettech.com/resources/blog/nuxt-js-and-vue-js-reasons-why-they-differ-and-when-do-they-combine/)**

**Conceitos usados em frameworks**

[Module bundlers](https://snipcart.com/blog/javascript-module-bundler)
Module bundler, transformam todo os imports de um projeto em um arquivo estaticos prontos para o navegador, os frameworks ja vem com um bundler na instalação, algumas vezes é possivel escolher qual.

**Mais info**

[Teoria de melhor criação de componentes](https://youtu.be/HVzYir_0Kgg)

[Sobre Refs](https://blog.logrocket.com/understanding-vue-refs/)

---

# 4. O nosso ambiente frontend

**As bibliotecas que extendem nosso sistema**:

**Obs:** Muitas das bibliotecas usadas pelo NUXT possuem uma documentações oficial e uma especifica para o framework(com menos informação, mais especificada)

- Chamadas API com [Axios](https://github.com/axios/axios) ([nuxt doc](https://axios.nuxtjs.org/))

- UI framework [Vuetify](https://vuetifyjs.com/en/introduction/why-vuetify/#why-vuetify3f) ([nuxt doc](https://www.npmjs.com/package/@nuxtjs/vuetify))

- Validação de relatorios com [Vee-validate](https://vee-validate.logaretm.com/v3/)
