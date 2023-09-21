# Webpack with TypeScript

This project provides a basic setup for using Webpack with TypeScript. It allows you to transpile TypeScript code into JavaScript and bundle it using Webpack.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your system:

- Node.js - Make sure to install [Node.js](https://nodejs.org/en), which includes npm (Node Package Manager)
- TypeScript

> To install TypeScript globally in your local machine you can use the following command:

```
npm install -g typescript
```

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/skmajumder/ts-webpack.git
cd ts-webpack
```

### 2. Install Dependencies

```
npm install
```

### 3. Project Structure

Your project should have the following structure:

- `src/`: This folder contains your TypeScript source files.
- `public/bundle.js`: This folder will contain the bundled JavaScript file.
- `tsconfig.json`: TypeScript configuration file.
- `webpack.config.js`: Webpack configuration file.
- `package.json`: Project metadata and scripts.
- `public/index.html`: HTML file that loads the bundled JavaScript.

### 4. Development Server

To start a development server with hot-reloading, run:

```
npm run serve
```

This will serve your project locally at `http://localhost:8080`.

### 5. Build the Project

To build your TypeScript code into a bundled JavaScript file, run:

```
npm run build
```

### 6. Include in HTML

Include the bundled JavaScript file in your HTML file (index.html in this case):

```
<script type="module" src="./bundle.js"></script>
```

## Usage

- Write your TypeScript code in the src/ folder, and Webpack will bundle it into a single JavaScript file in the public/ folder.

- Customize the TypeScript configuration in tsconfig.json and Webpack configuration in webpack.config.js according to your project requirements.

### Author

[Shuvo](https://github.com/skmajumder)
