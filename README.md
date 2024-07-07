# DISCOTHELLO 3D <img height="100px" width="160px" align="right" src="./public/assets/images/logo.gif" alt="logo-discothello">

## Table of contents

<details>
        <a href="#description">Description</a>
    <br>
        <a href="#technologies">Technologies</a>
    <br>
        <a href="#files-description">Files description</a>
    <br>
        <a href="#authors">Authors</a>
</details>

## <span id="description">Description</span>

A website called DiscOthello allows you to sign up and/or log in and play the game of Othello in three different 3D modes: solo: this mode lets you experiment and develop various tactics, AI mode allows you to play against the computer and try out various strategies, while multiplayer mode allows you to play Othello face-to-face with another player. However, if you are unable to play, there is a page that explains how to do so. Additionally, a chat bot enables you to converse with other players worldwide.There aren't many 3D and online Othello games, which is what gave rise to DiscOthello.

The project started as a way to challenge ourselves and create something engaging and fun for all ages. It evolved into a portfolio project for Holberton School, showcasing our skills and creativity. The project was developed over a two-month period, from initial concept to final implementation. We're proud of the work we've done and can't wait to share it with the world.

## <span id="technologies">Technologies</span>

<p align="left">
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
    <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="Javascript">
    <img src="https://img.shields.io/badge/blender-%23F5792A.svg?style=for-the-badge&logo=blender&logoColor=white" alt="Blender">
    <img src="https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white" alt="Unity">
    <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white" alt="C SHARP">
    <img src="https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white&style=for-the-badge" alt="WebGL">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js">
    <img src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
    <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord">
</p>

## <span id="files-description">Files Description</span>

### Project Root
The project root contains essential configuration files and the main entry point for the server application. It includes files for dependency management, server configuration, and general project documentation.

### `public` Directory
This directory holds all the static files of the application. It contains various HTML pages accessible to users, such as the homepage, profile page, game rules page, and scores page.

#### `assets` Directory
The `assets` directory is dedicated to static resources needed for the application’s functionality and appearance. It is subdivided into several subdirectories:

- **`images` Directory**: Contains all images used in the application, including background images, icons, logos, and tutorial images.
- **`scripts` Directory**: Houses JavaScript files responsible for different functionalities of the application, such as scripts for the footer, user profile management, scores management, game functionalities, the general script of the application, and the chat.
- **`styles` Directory**: Includes CSS stylesheets that define the appearance of various application pages, including styles for the footer, scores page, game page, homepage, and overall application style.

#### `games` Directory
This directory is specific to the games offered within the application. It contains HTML files for game pages, as well as configuration and version files for the game project. It may also include dependencies specific to the games.

### `routes` Directory
The `routes` directory organizes the server route files, defining different API access points. It contains files for authentication management, the main route file, scores submission management, socket management, and user management.

### `database` Directory
This directory is dedicated to files related to the application’s database. It contains a configuration file for the database and a SQL file for a specific game database (Othello).

## How to play

The player with the black pieces starts.

On each turn, the player must place a piece of his colour on an empty square in such a way as to enclose one or more opposing pieces between the piece played and another piece of his colour already on the board. This can be done horizontally, vertically or diagonally.

The winner is the player with the most pieces of their colour on the board.

## <span id="authors">Authors</span>

**Abdou Rodrigue HASSANY MOHAMED**
- Github : [@Rdrg974](https://github.com/Rdrg974)

**Theo JENNAT**
- Github : [@tjennat](https://github.com/tjennat)