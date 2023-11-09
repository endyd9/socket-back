import * as jwt from "jsonwebtoken"

export class TokenService {

    public async Hi(id:string) {
        const secret = "veryverystrongsecret"
        try {
            const token = jwt.sign({
                data:"ok",
                userId :id
            },
                secret,
                {
                    expiresIn:"10h"
                }
                )
            const refresh = jwt.sign({
                data:"하나 더 줘라"
            },secret,
                {
                    expiresIn:"1h"
                })
            return {
                res: "oo",
                token,
                refresh
            }
        } catch (e) {
            return {
                e
            }
        }
    }

    public async ok() {
        const res = "ok"
        return {
            res
        }
    }
}