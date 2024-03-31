# Food Delivery App Backend

This is the backend component of a food delivery application developed using Node.js, Express, and PostgreSQL. It provides RESTful APIs for managing food delivery operations such as order placement, pricing calculation, and user management.

## Features

- Dynamic pricing module to calculate delivery costs based on various factors such as distance and item type.
- APIs for managing users, orders, and pricing structures.
- Integration with PostgreSQL database for data storage.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/food-delivery-backend.git
    ```

2. **Install dependencies:**

    ```bash
    cd food-delivery-backend
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and configure the following environment variables:

    ```plaintext
    PORT=3000
    DB_HOST=localhost
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=food_delivery_db
    ```

4. **Start the server:**

    ```bash
    npm start
    ```

## API Documentation

The API documentation is generated using Swagger UI and is available at `/api-docs` endpoint. You can access it in your browser at [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

## Database Schema

The database schema is defined using PostgreSQL and includes the following tables:

- `organizations`: Stores information about organizations.
- `items`: Stores information about food items.
- `pricing`: Stores pricing structures linked to organizations and items.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.