# Simple Node Template

- Running TypeScript with tsx (TypeScript support without the need for build)
- Configured lint and prettier [use the prettier extension and set it as default]
- Configured Jest to run TypeScript
- Folder Structure
- Basic Structure with DDD

## Domain [Domain Rules]

- Contains entities, aggregates, events, and services reflecting the business rules of the application domain.

## Infra [Infrastructure]

- Houses external libraries, repository implementations, and adaptations for databases and other external services.

## Application [Application Layer]

- Includes controllers, repository abstractions, and services responsible for orchestrating interactions between domain rules and infrastructure.
This structure follows the principles of Domain-Driven Design (DDD), separating responsibilities according to the layers of domain, infrastructure, and application, making maintenance and scalability of the application more manageable.
