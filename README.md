To use the following application:

## First, compile the backend:

Ensure you have docker installed.

Then in the root folder `cd backend` && `docker build -t backend .`

After that is complete, run the backend using `docker run -it -p 8080 backend`

## Then set up the frontend project

From the root folder, run `cd frontend` && `pnpm install` to install node modules.

Then run `pnpm dev` and open up the project on [http://localhost:5173/](http://localhost:5173/)