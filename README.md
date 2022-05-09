# Sing me a Song API

Sing me a Song is a application for videos recommendations. The recommendation is given based on their score.

## Implemented features

- Add a new music recommendation
- Like or dislike (up or down vote)
- Get a list with the videos with the hightest scores
- Get a random video recommendation

## Technologies

<p>
  <img src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white' alt="Node"/>
  
  <img src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white' alt="Express" />
  
  <img src='https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' alt="TypeScript" />
  
  <img src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' alt="PostgreSQL" />
  
  <img src='https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white' alt='Prisma' />
  
  <img src='https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white' alt='Jest' />

</p>

## How to run

1. Clone this repository

```bash
git clone git@github.com:acolima/sing-me-a-song-api.git
```

2. Go to the project directory

```bash
 cd sing-me-a-song-api
```

3. Install dependencies

```bash
npm i
```

4. Create a `.env` file with the same structure of `.env.example` and change the values of `DATABASE_URL`

```bash
DATABASE_URL=
NODE_ENV=developement
```

5. Create the database 
```bash 
npx prisma migrate dev
```

6. Run project with

```bash
npm run dev
```

7. You can check the front-end repository of this project at https://github.com/acolima/sing-me-a-song and follow the instructions to run

## How to run the tests
1. Create a `.env.test` file with the same structure of `.env.example` and change the values of `DATABASE_URL`

```bash
DATABASE_URL=
NODE_ENV=test
```

2. Create the tests database 
```bash 
npx dotenv -e .env.test prisma migrate dev
```

3. Run project with
```bash
npm run dev:test
```

4. Run tests with
```bash
npm run test
```

5. Run coverage tests with
```bash
npm run test:coverage
```
