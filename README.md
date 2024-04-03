# FinderDB

FinderDB is an online lost and found catalog designed to streamline the process of managing and reclaiming lost items within organizations, such as companies or schools. It allows users to view, claim, and report lost items through an intuitive web interface, thereby reducing the workload on cleaning staff and improving the chances of lost items being returned to their rightful owners.

## Team Kumquat

- Hei Wang Ng - ng.he@northeastern.edu
- Nathan Cheung - cheung.nat@northeastern.edu
- Arav Kumar - kumar.ara@northeastern.edu

## Features

- **Catalog of Lost and Found Items**: Users can browse and search for items that have been found and reported.
- **Reporting Lost Items**: Users can report items they have lost, providing details and images to aid in identification.
- **Claiming Items**: Users can claim items that they believe belong to them, with a system in place to verify ownership.
- **Notifications**: Users receive notifications when their lost items are found or when there is a match for items they reported.
- **User Accounts and Reputation**: Users can create accounts, through which their activity and contributions (such as returning items) are tracked, potentially earning them recognition and rewards.

## Development Stack

- **Backend**: Flask (Python)
- **Frontend**: React (JavaScript)
- **Database**: SQL (Structured Query Language)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or later
- Node.js 14 or later
- A SQL database (PostgreSQL, MySQL, SQLite, etc.)

### Setting up the Backend

1. **Clone the Repository**

```bash
git clone https://github.com/A-Ravioli/FinderDB.git
cd finderdb/backend
```

2. **Install Dependencies**

```bash
pip install -r requirements.txt
```

3. **Configure the Database**

Edit the `config.py` file to include your database connection details.

4. **Initialize the Database**

```bash
flask db upgrade
```

5. **Run the Backend Server**

```bash
flask run
```

The backend server will start on `http://localhost:5000`.

### Setting up the Frontend

1. **Navigate to the Frontend Directory**

```bash
cd finderdb/frontend
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Frontend Application**

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Usage

- Navigate to `http://localhost:3000` in your web browser to start using FinderDB.
- Create an account or log in to report lost items, claim found items, or manage your user profile.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
