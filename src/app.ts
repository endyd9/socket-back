import express, {json, Request as ExRequest, Response as ExResponse, urlencoded} from "express";

import swaggerUi from "swagger-ui-express";
import {RegisterRoutes} from "../build/routes";
import cors from "cors";

export const app = express()

// const keycloak = new Keycloak({
//     "realm": "testrealm",
//     "keycloak_base_url": "http://localhost:8080/",
//     "client_id": "testclient",
//     "username": "testuser",
//     "password": "1234",
//     "is_legacy_endpoint": false
// })
//
// const getUserToken: () => void = async () => {
//     const accessToken = await keycloak.accessToken.get()
//     const token = await keycloak.jwt.verify(accessToken)
//     console.log(token)
//     console.log(token.isExpired())
//     console.log(token.hasRealmRole('user'))
//     console.log(token.hasApplicationRole('app-client-name', 'some-role'))
// }
// getUserToken()



app.use(
    urlencoded({
        extended: true,
    })
);
app.use(json());

app.use(cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500", "http://localhost:8080", "http://localhost:3000"],
    credentials: true
}))


app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
});

RegisterRoutes(app);