# Welix Backend

This is the backend component of the Welix project, a platform for managing templates and websites.

## Features

- Provides CRUDL (Create, Read, Update, Delete, List) operations for templates and websites.
- Built using Node.js, Express, and MongoDB.

## Installation

1. Clone this repository.
2. Install dependencies: `npm install`.

## Configuration

1. Create a `.env` file in the root directory based on `.env.example`.
2. Set your MongoDB connection string and other environment variables.

## Usage

1. Start the server: `npm start`.
2. API will be available at `http://localhost:3000`.

## API Endpoints

- `GET /templates`: List all templates.
- `GET /templates/:id`: Get details of a specific template.
- `POST /templates`: Create a new template.
- `PUT /templates/:id`: Update a template.
- `DELETE /templates/:id`: Delete a template.

- Similar endpoints are available for websites.
