# Innoloft Dashboard Project

This project is my submission for the Innoloft Application dashboard challenge. It's a dashboard application built using React.js, Redux, and Tailwind CSS to display and edit product information. The dashboard is designed to be responsive and user-friendly.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Innoloft Dashboard Project provides a user interface to manage and view product information. It consists of three main pages: the main dashboard, product view, and product editing.

## Features

- View a list of products on the main dashboard.
- View detailed information about a single product, including images, title, type, description, technologies, business models, TRL, investment effort/cost, video, and user/company info.
- Edit product attributes, description, categories, and TRL using a user-friendly interface.
- Apply white-labeling with different configurations based on environment variables.
- Save edited product information via PUT requests to the API.

Include screenshots or GIFs showcasing the different pages and features of your dashboard.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd innoloft-dashboard`.
3. Install dependencies: `npm install`.

## Usage

1. Start the development server: `npm start`.
2. Access the dashboard in your browser: `http://localhost:3000`.

## API Endpoints

- `GET /product/:productId/`: Fetch product details.
- `PUT /product/:productId/`: Update product information.
- `GET /trl/`: Fetch TRL list.
- `GET /configuration/:appId/`: Fetch app configuration.

