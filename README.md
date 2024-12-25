![SitioReact](https://github.com/user-attachments/assets/9d321276-e4c1-4a4d-9a18-7d1bac3193b4)

##  Algoritmos (ReactJS & Vite)

#### Descripción
<p>Interfaz de usuario que implementa tres algoritmos 'Sucesion Fibonacci, Numeros primos y Numero triangular' unidos en una sola formula la cual tiene como objetivo probar la logica y realizar pruebas unitarias</p>

<img width="200" alt="Formula" src="https://github.com/user-attachments/assets/37f8e337-563a-40fe-a976-a9e9c0353136">

#### Estado del Proyecto
+ Finalizado 

> [!IMPORTANT]
> Antes de ejecutar tome en cuenta

#### Instalar NodeJs
<p>Asegúrate de tener Node.js (el administrador de paquetes de Node) instalados en tu máquina. Puedes descargar e instalar Node.js desde su sitio oficial.</p>

#### Instalar & ejecutar
<p>Este proyecto utiliza Vite como herramienta de desarrollo. No es necesario configurar manualmente, ya que las dependencias y configuraciones se instalarán automáticamente con 'npm install' </p>

<p> Continuando, en el directorio del proyecto ejecute: </p>

```bash
npm install
```

<p>Una vez finalizada la instalacion, puede ejecutar el proyecto: </p></p>

```bash
 npm run dev
```
<p>En su terminal podra visualizar el puerto donde se ejecuta el proyecto de lo contrarío se ejecutará por defecto en http://localhost:5173. Si no funciona, verifique el puerto en el archivo vite.config.js. <br> </p>

> [!NOTE]
> Apartado de pruebas unitarias

##### Para este proyecto es necesario instalar Jest y Babel para el uso de pruebas unitarias. A continuacion una breve guia de como configurar el apartado de las dependencias para evitar errores al ejecutar el test.

```bash
npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react
```
<p>Breve resumen de las dependecias a instalar</p>

- Jest: El framework para pruebas unitarias.

- @babel/core: El compilador principal de Babel.

- @babel/preset-env: Permite compilar las últimas características de JavaScript a una versión compatible con entornos más antiguos.

- @babel/preset-react: Permite que Babel entienda y convierta el código JSX de React.

- babel-jest: Un transformador que permite que Jest use Babel para convertir el código antes de ejecutar las pruebas.

<p>Para configurar Jest correctamente para tus pruebas unitarias, especialmente si estás utilizando ECMAScript Modules (ESM) o si necesitas soporte para JSX (por ejemplo, si estás usando React, el cual aplica para este caso), aquí tienes una guía sobre cómo hacerlo</p>

##### En tu archivo package.json, asegúrate de que tengas la siguiente configuración:

```bash
{
  "type": "module", // Esto es necesario si estás usando módulos ESM
  "scripts": {
    "test": "jest" // Comando para ejecutar las pruebas
  },
  "devDependencies": {
    "jest": "^27.0.0", // Asegúrate de tener la última versión de Jest
    "babel-jest": "^27.0.0", // Para transformar el código con Babel
    "@babel/preset-env": "^7.0.0", // Para transformar el código de ES6+
    "@babel/preset-react": "^7.0.0" // Si estás usando React
  }
}
```
##### Configuracion de Babel

<p>Crea un archivo de configuración de Babel en la raíz de tu proyecto. Puedes llamarlo .babelrc o babel.config.js. Aquí tienes un ejemplo de cómo configurarlo (En este caso no aplica ya que tal configuracion viene en el repositorio)</p>

```bash
{
  "presets": [
    "@babel/preset-env", // Para transformar ES6+
    "@babel/preset-react" // Para transformar JSX si usas React
  ]
}
```

##### Ejecución de Pruebas
<p>Una vez que hayas configurado todo, puedes ejecutar tus pruebas con el siguiente comando</p>

```bash
npm test
```

#### Capturas de pantalla

<img width="300" alt="PreviewDesktopForm" src="https://github.com/user-attachments/assets/318690b8-53db-4fe2-8a0b-6cf4c432d775">

#### Licencia (MIT License)