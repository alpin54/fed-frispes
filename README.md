> frispes

# Front-end Development Base Template

### Getting Started

Run the project

- Enter terminal, just run code
  ```bash
  $ git remote add origin https://github.com/alpin54/fed-frispes.git
  $ cd fed-template
  $ npm install (wait until it`s finised)
  $ npm run start
  ```

Create component base on new branch

- Enter terminal, and make sure your base code base on branch develop
  ```bash
  $ git checkout develop
  ```
- Create new branch with name components, for example the component is Main Banner, so branch name is components/main-banner, back to terminal
  ```bash
  $ git checkout -b components/main-banner
  ```
- Doing your task and enjoy the coding
- After all done for the component, do commit as usual
  ```bash
    $ git add .
    $ git commit -m "Insert your message according your task"
    $ git push origin components/main-banner (according branch component)
  ```
