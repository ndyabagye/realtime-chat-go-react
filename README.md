To use the following application:

## First, compile the backend:

Ensure you have docker installed.

Then cd backend && `docker build -t backend .`

After that is complete, then run the backend using `docker run -it -p 8080 backend`

## The install node modules in the frontend project

From the root folder, run cd frontend && `pnpm install`

Then run `pnpm dev` and open up the project on [http://localhost:5173/](http://localhost:5173/)