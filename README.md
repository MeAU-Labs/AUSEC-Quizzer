# AUSEC Quizzer- Puthulir

[![Netlify Status](https://api.netlify.com/api/v1/badges/f9bc2b2a-f73b-4679-9a51-4eaa73de9e41/deploy-status)](https://app.netlify.com/sites/puthulir/deploys)

AUSEC Quizzer is a web application built for the Anna University Entrepreneurship Club. It is designed to host quizzes organized by the club. This application is built using **Next.js**, **TailwindCSS**, **shadcn/ui**, **Prisma**, **React Hook Form**, and **Resend** for handling emails.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
  - [Database Management](#database-management)
  - [Email Management](#email-management)
- [Tech Stack](#tech-stack)
- [License](#license)

## Features

- Online One-time Quiz hosting
- Responsive and modern UI with TailwindCSS and shadcn/ui
- Persistent state management with PostgreSQL
- Email notifications using Resend

## Prerequisites

Before setting up the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20.x or later)
- [npm](https://www.npmjs.com/) (v10.x or later)
- [Prisma CLI](https://www.prisma.io/docs/getting-started)

Set environment variables following the [reference template](./ausec-quizzer/.env.example)

## Getting Started

Follow these steps to get the project up and running locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MeAU-Labs/AUSEC-Quizzer.git
   cd ausec-quizzer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the database**:

   - Create your database and add the connection URL in the `.env` file as `DATABASE_URL`.

4. **Generate Prisma Client**:

   ```bash
   npm run db:generate
   ```

5. **Run the development server**:

   ```bash
   npm run dev
   ```

6. **Open the app in your browser**:
   The app will be running at [http://localhost:3000](http://localhost:3000).

## Available Scripts

In the project directory, you can run the following commands:

- **Start the development server**:

  ```bash
  npm run dev
  ```

- **Build the application for production**:

  ```bash
  npm run build
  ```

- **Start the production server**:

  ```bash
  npm run start
  ```

- **Lint the codebase**:
  ```bash
  npm run lint
  ```

### Database Management

The project uses Prisma for database management. The following commands are available for managing the database:

- **Generate Prisma client**:

  ```bash
  npm run db:generate
  ```

- **Apply database migrations**:

  ```bash
  npm run db:migrate
  ```

- **Push the Prisma schema to the database**:

  ```bash
  npm run db:push
  ```

- **Open Prisma Studio** (a web-based interface to inspect and modify your database):
  ```bash
  npm run db:studio
  ```

### Email Management

- **Build email templates**:

  ```bash
  npm run email:build
  ```

- **Preview email templates**:

  ```bash
  npm run email:preview
  ```

- **Start development server**:
  ```bash
  npm run email:dev
  ```

## Tech Stack

- **Next.js** - A React framework for building server-rendered applications.
- **TRPC**- A framework for building end-to-end typesafe APIs
- **TailwindCSS** - A utility-first CSS framework for rapid UI development.
- **shadcn/ui** - A component library built on top of Radix UI and TailwindCSS.
- **Prisma** - An ORM for type-safe database access.
- **React Hook Form** - A library for managing forms in React.
- **Resend** - A service for sending transactional emails.

## License

This project is licensed under the MIT License.
