
# Nest.js Web API with Planet Scale MySQL and TypeORM

This repository contains a Nest.js-based web API that leverages Planet Scale MySQL as the database and utilizes TypeORM as the ORM (Object-Relational Mapping) tool. The API provides functionality to manage developers, including creating new records, checking username existence, and retrieving lists of developers.

## Requirements

To run this API locally, ensure that you have the following prerequisites installed:

- Node.js (version >= 12)
- Planet Scale MySQL instance
- npm (Node Package Manager)

## Installation

Follow these steps to install and set up the API:

1. Clone this repository to your local machine using the following command:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project's directory:
   ```bash
   cd nestjs-web-api
   ```

3. Install the required dependencies by running:
   ```bash
   npm install
   ```

4. Set up the database connection by configuring the TypeORM connection options in the `ormconfig.json` file. Replace the placeholders with your MySQL connection details.

## Configuration

Before running the API, make sure to configure the necessary environment variables:

1. Create a `.env` file in the project's root directory.
2. Define the following variables in the `.env` file:

   ```javascript
   PORT=<desired-port>
   DB_HOST=<mysql-host>
   DB_PORT=<mysql-port>
   DB_USERNAME=<mysql-username>
   DB_PASSWORD=<mysql-password>
   DB_DATABASE=<mysql-database>
   ```

   Replace the placeholders with your MySQL connection details.

## Usage

To start the API server, run the following command:

```bash
npm run start
```

The server will start running on the specified port, and you can access the API endpoints using a tool like Postman or through your browser.

## API Endpoints

The API provides the following endpoints:

- `POST /developers` - Create a new developer record. Send a JSON payload with the developer's details.
- `GET /developers/:username` - Check the existence of a developer with the given username.
- `GET /developers` - Retrieve a list of all developers.

## Contributing

If you want to contribute to this project, feel free to submit pull requests or open issues. Make sure to follow the established coding style and provide clear and concise descriptions of your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.

## Acknowledgements

This project utilizes the following open-source libraries and frameworks:

- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable web applications.
- [TypeORM](https://typeorm.io/) - An ORM that provides a simplified way to interact with databases using object-oriented programming.
- [Planet Scale MySQL](https://www.planetscale.com/) - A scalable and reliable MySQL database service.
- [npm](https://www.npmjs.com/) - The package manager for the Node.js ecosystem.

## Contact

For any questions or inquiries about this project, please contact [maintainer-name](mailto:maintainer-email).
