# API Documentation

## Base URL
`/api`

## Endpoints

### Auth
- `POST /api/auth/login` - Admin Login
- `POST /api/auth/register` - Register new admin (usually disabled in production)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product
- `POST /api/products` - Create a product (Protected)
- `PUT /api/products/:id` - Update a product (Protected)
- `DELETE /api/products/:id` - Delete a product (Protected)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create a category (Protected)
- `DELETE /api/categories/:id` - Delete a category (Protected)

### Contact
- `POST /api/contact` - Send a contact message

*Note: Protected endpoints require a valid JWT token in the `Authorization` header: `Bearer <token>`.*
