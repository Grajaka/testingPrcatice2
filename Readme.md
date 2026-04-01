# Workshop: Integration Testing with Jest 🧪

This project focuses on applying integration testing techniques in a Node.js backend. We explore how to validate the interaction between different layers (Controllers, Services, Repositories) using Mocks, Stubs, and Drivers.

## 🎯 Objective

To master the simulation of dependencies and external services to validate system behavior without relying on real databases or external APIs.

## 🛠️ System Context

The workshop implements a User Registration module following this flow:

- **Client**: Sends user data via HTTP.
- **Persistence**: The system saves the user to a database (simulated).
- **Notification**: The system sends a welcome email.
- **Response**: Returns an HTTP 201 status code.

## 📂 Project Structure

```
TESTINGTASK2/
├── src/
│   ├── controllers/    # Express controllers (HTTP logic)
│   ├── repositories/   # Data access (Database simulation)
│   ├── services/       # Business logic (Orchestration)
│   ├── utils/          # External utilities (Email service)
│   ├── app.js          # Express application setup
│   └── tests/          # Integration test suites
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have Node.js installed.

### 2. Installation

Clone the repository and install the necessary testing dependencies:

```bash
npm install express jest supertest
```

### 3. Running Tests

Execute the test suite using the following command:

```bash
npm test
```

## 🧪 Workshop Core Concepts

### Point 1: Stubs (State Simulation)

**Goal**: Simulate the database layer (userRepository) to return predictable data without a real connection.

**Implementation**: Use `jest.fn().mockResolvedValue()` to force the repository to return a specific user object.

### Point 2: Mocks (Behavior Verification)

**Goal**: Verify that the emailService is actually triggered during the flow.

**Implementation**: Use `jest.mock()` to replace the service and `expect(...).toHaveBeenCalled()` to ensure the email was sent.

### Point 3: Drivers (HTTP Simulation)

**Goal**: Test the full integration from the outside in.

**Implementation**: Use supertest as a driver to send a real POST request to the `/users` endpoint and validate the status code and response body.