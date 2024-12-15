# README

## Proyecto: Moda center

Este proyecto incluye una arquitectura con **Backend** y **Frontend**. El **Backend** utiliza Node.js y Express, mientras que el **Frontend** está construido con React y TypeScript. A continuación, se detalla el proceso de configuración e instalación de ambos entornos.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- Node.js (v16 o superior recomendado)
- npm (instalado junto con Node.js)
- Visual Studio Code o tu editor de código preferido

---

## Pasos de Configuración

### 1. Estructura del Proyecto
1. Crea una carpeta para el proyecto principal. Por ejemplo:

#### mkdir productos-de-moda cd productos-de-moda

2. Dentro de esta carpeta, crea dos subcarpetas:
- `backend`: para el servidor
- `frontend`: para la aplicación cliente

---

### 2. Configuración del Backend

#### a) Inicializar el Backend
1. Navega a la carpeta `backend`:

#### cd backend 

2. Ejecuta el comando para inicializar un proyecto Node.js:

#### npm init -y


3. Vuelve al directorio raíz del proyecto:

#### cd..

#### b) Instalar Dependencias
1. Instala las dependencias principales del backend:
#### npm install express mongoose cors dotenv

2. Instala las dependencias de desarrollo:
#### npm install -D nodemon eslint prettier eslint-config-prettier eslint-plugin-node eslint-plugin-import


3. Agrega soporte para TypeScript y sus tipos:
#### npm install -D typescript ts-node @types/node @types/express @types/mongoose @types/cors


#### c) Configuración Adicional
1. Inicia un repositorio Git en la carpeta del backend: 
#### git init

Confirma con "y" si es necesario.

2. Genera un archivo `.gitignore`:
#### npx create-gitignore node

3. Inicializa TypeScript:
#### npx tsc --init


#### d) Ejecutar el Servidor
1. Para compilar el proyecto, ejecuta:
#### npm run build

2. Para iniciar el servidor, utiliza:
#### npm start


---

### 3. Configuración del Frontend

#### a) Crear el Proyecto Frontend
1. Desde la carpeta raíz del proyecto, ejecuta:
#### npx create-react-app frontend --template typescript

**Nota:** Aunque puedan aparecer errores, el proyecto se creará correctamente.

2. Alternativamente, puedes usar Vite para inicializar el proyecto:
#### npm create vite@latest frontend

- Confirma con "y".
- Selecciona `React`.
- Selecciona `TypeScript`.

#### b) Instalar Dependencias
1. Navega a la carpeta del frontend:
#### cd frontend

2. Instala las dependencias necesarias:
#### npm install

3. Instala bibliotecas adicionales:
#### npm install @testing-library/react@latest npm install react-router-dom @mui/material @emotion/react @emotion/styled axios

#### c) Ejecutar el Frontend
1. Para iniciar el servidor de desarrollo, ejecuta:

#### npm run dev


---

## REGISTRAR USUARIO

URL: POST http://localhost:5000/api/users/register
Cuerpo del Request:

{
    "username": "pablo contreras",
    "email": "pablo.contreras@gmail.com",
    "password": "pepito1234"
}

## Notas finales:

1. Recuerda abrir el proyecto en Visual Studio Code y asegurarte de que los terminales estén en las carpetas correctas (frontend o backend) al ejecutar comandos.

2. Si experimentas problemas, verifica que todas las dependencias estén correctamente instaladas.



 








