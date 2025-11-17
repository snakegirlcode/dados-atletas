# 🏅 Projeto **Dados dos Atletas**

![Badge Status](https://img.shields.io/badge/status-finalizado-brightgreen)
![Badge JS](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Badge OOP](https://img.shields.io/badge/Programação%20OO-Classes-blue)
![GitHub User](https://img.shields.io/badge/GitHub-snakecodegirl-181717?logo=github)

---

## 📌 **Resumo do Projeto**

Aplicação desenvolvida em **JavaScript** capaz de:

* Receber informações de um atleta
* Processar categoria, IMC e média válida
* Exibir tudo no console de forma organizada 🖥️
* Utilizar **Programação Orientada a Objetos**

---

## 🚀 **Funcionalidades da Classe `Atleta`**

A classe concentra todos os dados e métodos do atleta.

### **Atributos:**

* 🧑 Nome
* 🎂 Idade
* ⚖️ Peso
* 📏 Altura
* 📝 Notas (array)

### **Métodos:**

* 🏆 `calculaCategoria()` – determina a categoria
* 📊 `calculaIMC()` – calcula IMC
* ✏️ `calculaMediaValida()` – calcula a média válida
* 🔍 Métodos *getter* (`obtemNomeAtleta()`, `obtemIMC()`, etc.)

---

## 🧮 **Regras Utilizadas**

### **Categorias por idade:**

| Idade   | Categoria     |
| ------- | ------------- |
| 9 a 11  | Infantil      |
| 12 a 13 | Juvenil       |
| 14 a 15 | Intermediário |
| 16 a 30 | Adulto        |
| Outros  | Sem categoria |

### **Fórmula da IMC:**

```
IMC = peso / (altura * altura)
```

### **Média válida:**

Segue o mesmo critério do Projeto de Certificação 1: remove maior e menor nota antes da média.

---

## 🧪 **Exemplo de Uso**

```javascript
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(", ")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`);
```

---

## 🖼️ **Exemplo de saída no console (print)**

<p align="center">
  <img width="561" height="286" alt="Captura de tela 2025-11-17 165124" src="https://github.com/user-attachments/assets/7e0a53e8-c540-409c-8ffa-d906a6ebad17" />
</p>

---

## 📁 **Estrutura do Repositório**

```
dados-atletas/
│── dados-atletas.js   # Código principal
│── README.md           # Documentação
```

---

## 📎 Como usar em outro arquivo

Se você quiser importar a classe **Atleta** em outro arquivo JavaScript, use o modelo abaixo:

### **Usando ES Modules (Node.js moderno ou Vite):**

```javascript
import Atleta from "./dados-atletas.js";

const atleta = new Atleta(
  "Maria",
  20,
  60,
  1.65,
  [8, 9, 10, 9]
);

console.log(atleta.obtemIMC());
console.log(atleta.obtemCategoria());
```

### **Usando Browser (script type=module):**

```html
<script type="module">
  import Atleta from './dados-atletas.js';

  const atleta = new Atleta(
    "João",
    18,
    70,
    1.80,
    [9, 8.5, 10, 7.5]
  );

  console.log(atleta.obtemMediaValida());
</script>
```

---

## ▶️ **Como executar o projeto**

1. Clone o repositório:

```
git clone https://github.com/seuusuario/dados-atletas
```

2. Abra o arquivo **dados-atletas.js** no Node, navegador, VSCode ou DEVstart.
3. Veja a saída no **console**.

---

## ✨ Autora

Projeto desenvolvido por **Thaís de Sousa Campos**.
