# Sing me a Song API

API for Sing me a Song, a application for videos recommendations. The recommendation is given based on their score.

## Implemented features

- Add a new music recommendation
- Like or dislike (up or down vote)
- Get a list of the videos with the hightest scores
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

```
git clone git@github.com:acolima/sing-me-a-song-api.git
```

2. Go to the project directory

```
cd sing-me-a-song-api
```

3. Install dependencies

```
npm i
```

4. Create a `.env` file with the same structure of `.env.example` and change the value of `DATABASE_URL`

```
DATABASE_URL=
```

5. Create the database

```
npx prisma migrate dev
```

6. Run project with

```
npm run dev
```

:star: You can check the front-end repository of this project <a href='https://github.com/acolima/sing-me-a-song'>here</a> and follow the instructions to run

## How to run the tests

1. Create a `.env.test` file with the same structure of `.env.example` and change the value of `DATABASE_URL`

```
DATABASE_URL=
```

2. Create the tests database

```
npx dotenv -e .env.test prisma migrate dev
```

3. Run project with

```bash
npm run dev:test
```

4. Run tests

```
npm run test
```

5. Run coverage tests

```
npm run test:coverage
```

## Author

<img src='https://avatars.githubusercontent.com/acolima' width='150px'/>

<p>
  <a href='https://www.linkedin.com/in/ana-caroline-oliveira-lima/'>
    <img src='https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white' alt='LinkedIn' />
  </a>
  <a href='mailto:acolima@gmail.com'>
    <img src='https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white' alt='Gmail' />
  </a>
</p>
