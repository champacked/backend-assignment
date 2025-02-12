# Project Setup with MongoDB

## Prerequisites

- **Node.js** installed
- **MongoDB** installed and running locally
- **Git** installed (optional, for cloning repositories)

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. Install Dependencies

```sh
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add:

```sh
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=5000
```

### 5. Run the Project

```sh
npm start
```

