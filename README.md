# TasksApp

This is a simple Tasks app built with Next.js 14.2, Prisma, NextAuth, and MongoDB.

## Running the Project

To run the project, you first need to set up the provider environment variables:

- DATABASE_URL
- GITHUB_ID
- GITHUB_SECRET
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- NEXTAUTH_URL
- NEXTAUTH_SECRET

## Steps

1. **Install Project Dependencies**:
   ```bash
   yarn install
   ```

2. **Sync the Prisma Database with MongoDB (Atlas)**:
   ```bash
   yarn db:push
   ```

3. **Run the Development Script**:
   ```bash
   yarn dev
   ```

## TODO :
- [x] IMPORTANT : Renaming all the Note to Todo 
- [x] ADD custom email and password register also login
- [x] ADD a Toggle to switch between completed and uncompleted tasks (and its actions ofc)
- [x] Continue the Writing the docs
