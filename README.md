# Project Management Web App

A full-stack Project Management Web Application where users can create projects, assign tasks, and track progress with role-based access control for Admin and Member users.

## Live Demo

Frontend Live URL: https://precious-dieffenbachia-b641f0.netlify.app/

Backend API URL: https://projectmanagerapp-production-e8f6.up.railway.app

## GitHub Repository

https://github.com/govindsharma1407/project_manager_app

## Features

- User authentication with Signup and Login
- Role-based access control: Admin and Member
- Project management
- Task creation and assignment
- Task status tracking
- Dashboard for viewing tasks and project progress
- REST API integration
- MongoDB database integration
- Frontend deployed on Netlify
- Backend deployed on Railway

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Netlify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Railway

## User Roles

### Admin
- Can create projects
- Can create and assign tasks
- Can manage team members
- Can track project and task progress

### Member
- Can login to the dashboard
- Can view assigned tasks
- Can update task status

## API Endpoints

### Authentication

```http
POST /api/auth/signup
POST /api/auth/login
