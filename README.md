# discord-bot-v14
Template for a Discord Bot v14

---

To install bot :

```bash
npm install
```

---

To configure bot : 

Create a new bot on https://discord.com/developers
Add following scopes to bot : 
- bot
- applications.commands
Add permissions to bot depending on what you want. For test purpose on a private discord you can use Administrator
Generate a Token for you bot

Copy .env.dist to .env file 
Fill you discord bot token and discord application id in it

if you want to activate dev mode, set to 1 .env DEVMODE var. It will enable /ping tool command

---

To launch bot : 

```bash
npm run test
```

To launch bot in dev mode (watch files) :

```bash
npm run start:dev
```