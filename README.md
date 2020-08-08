![PokéChat Server](./.github/banner.png)

# PokéChat Server

This Express server requires [the PokéChat client](https://github.com/lukeocodes/pok--chat) to run. Check out [the demo](https://hackathon-pokechat.herokuapp.com/) and see it all working together.

## Project Setup

Install the `nexmo-cli@beta` using NPM.

```shell
npm install nexmo-cli@beta
```

Sign up for a [Vonage developer account](https://dashboard.nexmo.com/sign-up).

Configure the `nexmo-cli` to connect to our service by running it with your API key and API Secret, [found on the dashboard](https://dashboard.nexmo.com/).

```shell
# setup using your api key (e.g. c861e54a) and secret (e.g. dSRHL4WGuuBve791)
nexmo setup c861e54a dSRHL4WGuuBve791
```

Create a service application for your app.

```shell
nexmo app:create "PokéChat" http://example.com http://example.com  --keyfile private.key
# Application created: 19c84022-aa50-4ac6-a5d9-8b5422aefada
# Private Key saved to: private.key
```

Create a default conversation for members to join.

```shell
nexmo conversation:create display_name="Route 11"
# Conversation created: CON-0c4a4c13-d38c-4317-86bf-4125257d7b52
```

Create a `.env` file which contains the following variables;

| variable | example | purpose | from |
|---|---|---|---|
| CLIENT_URL | http://localhost:8080 | For `cors` configuration. | The URL of [the PokéChat client](https://github.com/lukeocodes/pok--chat) |
| VONAGE_API_KEY | c861e54a | For connecting to the Vonage APIs | From the setup process |
| VONAGE_API_SECRET | dSRHL4WGuuBve791 | For connecting to the Vonage APIs | From the setup process |
| VONAGE_APPLICATION_ID | 19c84022-aa50-4ac6-a5d9-8b5422aefada | For creating users with the right access | From the setup process |
| VONAGE_DEFAULT_CONVERSATION_ID | CON-0c4a4c13-d38c-4317-86bf-4125257d7b52 | For connecting users the right chat room | From the setup process |
| VONAGE_PRIVATE_KEY | "-----BEGIN PRIVATE KEY-----\nMII6+f8p6XvP2g==\n-----END PRIVATE KEY-----\n" | For access to the right application | From the setup process |

It should look like this;

```shell
CLIENT_URL=http://localhost:8080
VONAGE_API_KEY=c861e54a
VONAGE_API_SECRET=dSRHL4WGuuBve791
VONAGE_APPLICATION_ID=19c84022-aa50-4ac6-a5d9-8b5422aefada
VONAGE_DEFAULT_CONVERSATION_ID=CON-0c4a4c13-d38c-4317-86bf-4125257d7b52
VONAGE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMII6+f8p6XvP2g==\n-----END PRIVATE KEY-----\n"
```

And, install your dependencies;

```
npm install
```

### Hot-reloads for development

```
npm run dev
```

### Runs production

```
npm start
```
