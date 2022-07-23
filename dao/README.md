# Getting Started

## Installation

```
git clone https://github.com/mfloresss/learning-knexjs.git # using https
or
git git@github.com:mfloresss/learning-knexjs.git # using ssh

cd learning-knexjs
npm i # install dependencies
```

### Database creation

```
npm run db:setup # Runs migrations and seeds
```

### Run the app

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

```
npm run dev
```

## Environment Variables

By default, env files have been removed from the repo to securize our process. To work, you need to generate the env files.

Ensure the `.env` file has required environment variables:

```
DB_USER=<YOUR_DATABASE_USER>
DB_PASSWORD=<YOUR_PASSWORD_TO_CONNECT_DATABASE>
```