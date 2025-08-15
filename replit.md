# Overview

This is a modern full-stack web application built with React and Express, featuring a personal portfolio/resume website. The application showcases a developer's skills, education, projects, certificates, and contact information in an interactive, responsive format. It's designed as a complete professional portfolio with sections for about, skills, education, projects, certificates, and contact details.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side application is built with React and TypeScript, using a component-based architecture with the following key decisions:

- **React with TypeScript**: Provides type safety and better developer experience
- **Vite**: Used as the build tool for fast development and optimized production builds
- **TailwindCSS**: Utility-first CSS framework for rapid styling and consistent design
- **Shadcn/ui Components**: Pre-built, accessible UI components built on Radix UI primitives
- **Framer Motion**: Animation library for smooth, interactive user experiences
- **Wouter**: Lightweight client-side routing solution
- **React Query**: Data fetching and state management with caching capabilities

The frontend follows a modular structure with reusable components organized in a logical hierarchy. The application uses CSS custom properties for theming and maintains design consistency across all components.

## Backend Architecture
The server-side application uses Node.js with Express and follows a simple REST API pattern:

- **Express.js**: Web framework for handling HTTP requests and responses
- **TypeScript**: Type-safe server-side development
- **In-Memory Storage**: Simple storage interface with fallback to memory-based storage
- **Modular Route Registration**: Clean separation of route definitions and business logic
- **Middleware Integration**: Request logging, error handling, and development tooling

The backend is designed with a pluggable storage interface, allowing for easy migration from in-memory storage to database solutions.

## Development Workflow
The application uses a monorepo structure with shared TypeScript types and utilities:

- **Shared Schema**: Common data models and validation schemas using Drizzle and Zod
- **Path Aliases**: Clean import statements using TypeScript path mapping
- **Hot Module Replacement**: Vite integration for instant development feedback
- **Development Middleware**: Specialized tooling for Replit development environment

## Database Architecture
The application is configured for PostgreSQL using modern database tools:

- **Drizzle ORM**: Type-safe database operations with schema-first approach
- **PostgreSQL**: Configured for production use with Neon Database integration
- **Migration Support**: Database schema versioning and deployment automation
- **Type Generation**: Automatic TypeScript type generation from database schema

# External Dependencies

## UI and Styling
- **@radix-ui/react-\***: Comprehensive set of unstyled, accessible UI primitives
- **TailwindCSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Animation and gesture library for React
- **Lucide React**: Icon library with consistent design language

## Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle ORM**: Modern TypeScript ORM with excellent type safety
- **Drizzle Kit**: Database migration and introspection tools

## Development Tools
- **Vite**: Next-generation frontend build tool
- **@replit/vite-plugin-\***: Replit-specific development enhancements
- **ESBuild**: Fast JavaScript bundler for production builds

## State Management and Data Fetching
- **@tanstack/react-query**: Powerful data fetching and caching library
- **React Hook Form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for form handling

## Validation and Type Safety
- **Zod**: TypeScript-first schema validation
- **Drizzle-Zod**: Integration between Drizzle ORM and Zod validation

## Utilities
- **Class Variance Authority**: Utility for creating type-safe component variants
- **CLSX**: Utility for conditionally joining classNames
- **Date-fns**: Modern JavaScript date utility library