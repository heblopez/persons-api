# 📞 Persons API - Backend with TypeScript and Express

This is a backend project for a phonebook application developed using **Node.js**, **Express**, and **TypeScript**. It provides an API to manage a list of persons, allowing you to create, read, and delete persons to the the phonebook.

## 🚀 Features

- CRUD operations for contacts: create, read, update, and delete persons.
- Uses TypeScript for safe typing and better code maintenance.
- Organized project structure for easy scalability.
- Input data validation.

## 📋 Requirements

- **Node.js** version `18.x` or higher.
- **npm** (comes with Node.js).
- **Express** version `4.21.1`.
- **TypeScript** version `^5.x`.
- **@types/express** version `4.17.21` for Express types.

## 📂 Project Structure

```bash
📁 persons-api/
├── 📁 src/
│   ├── 📄 index.ts            # Application entry point
│   ├── 📁 controllers/        # Controllers for managing persons
│   │   └── 📄 info.controller.ts
│   │   └── 📄 persons.controller.ts
│   ├── 📁 data/
│   │   └── 📄 persons.ts      # Mock data
│   └── 📁 routes              # Server route definitions
│       └── 📄 info.routes.ts
│       └── 📄 person.routes.ts
├── 📄 .gitignore             # Git ignore file
├── 📄 .prettierrc            # Prettier configuration
├── 📄 eslint.config.mjs       # ESLint configuration
├── 📄 README.md               # Project documentation
├── 📄 package.json            # Project dependencies and scripts
└── 📄 tsconfig.json           # TypeScript configuration
```

## ⚙️ Installation

1. Clone this repository:

```bash
git clone https://github.com/heblopez/persons-api.git
cd persons-api
```

2. Install the dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start    # The server will be available at http://localhost:3001 by default.
```

## 📌 Available Scripts

- `npm run build`: Compiles TypeScript code to JavaScript.
- `npm run lint`: Runs ESLint to check for code style and linting issues.
- `npm run lint:fix`: Runs ESLint with the `--fix` flag to automatically fix linting issues.
- `npm run format`: Runs Prettier to format the code.
- `npm run dev`: Starts the server in development mode using ts-node with auto-reloading.
- `npm start`: Starts the server using the compiled JavaScript code.

## 🚦 API Routes

| Method | Route               | Description                              |
|--------|---------------------|------------------------------------------|
| GET    | `/api/persons`      | Retrieves all persons                    |
| GET    | `/api/persons/:id`  | Retrieves a person by its ID             |
| POST   | `/api/persons`      | Creates a new person                     |
| DELETE | `/api/persons/:id`  | Deletes a person by its ID               |
| GET    | `/info`             | Retrieves info about the phonebook       |

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Server framework for building APIs easily.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **ts-node**: Run TypeScript directly without prior compilation (useful for development).

## 🤝 Contributions

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push the changes to your branch (`git push origin feature/new-feature`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

## ✉️ Contact

If you have any questions or suggestions, feel free to contact me at [heberth.lopez.19@gmail.com](mailto:heberth.lopez.19@gmail.com).
