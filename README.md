# Backend Project using Strapi

This is a project that will setup strapi with MariadB and phpMyAdmin.

Make sure to have <https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack> installed in VSCode.

## Usage

- Clone the repo

```sh
git clone https://github.com/Coders-HQ/Backend-Brain.git
```

- Change directory

```sh
cd Backend-Brain
```

- Open in VSCode

```sh
code .
```

- You will be prompted to open in a container, click on `Reopen in Container`

- Once the container is up and running, open a new terminal and run the following command

```sh
cd my-app
```

- Install node dependencies

```sh
yarn install
```

- Start in Development mode

```sh
yarn develop
```

- Build the `app` if you get API Error

```sh
yarn build
```

## Services

- To Access strapi admin interface <http://localhost:1337/admin>
- To Access strapi server <http://localhost:1337>

- To Access the database using phpMyAdmin visit <http://localhost:8086>
	- for Database field use `db`
	- for username & password use `nodejs`
