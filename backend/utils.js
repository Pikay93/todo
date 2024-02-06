import axios from 'axios';

async function getKeycloakToken() {
    const keycloakConfig = {
        baseUrl: 'https://jupiter.fh-swf.de/keycloak',
        realm: 'webentwicklung',
        clientId: 'todo-backend',
    };

    const tokenEndpoint = `${keycloakConfig.baseUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`;

    try {
        const config = require('./config.json');
        const USER = config.USER;
        const PASSWORD = config.PASSWORD;
        const response = await axios.post(tokenEndpoint,
            {
                'grant_type': 'password',
                'client_id': keycloakConfig.clientId,
                'username': USER,
                'password': PASSWORD,
            },
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });

        return response.data.access_token;
    } catch (error) {
        console.error('Fehler beim Abrufen des Keycloak-Tokens', error);
        return null;
    }
}

export default getKeycloakToken