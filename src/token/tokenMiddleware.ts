import express, { NextFunction } from 'express';
import * as jwt from "jsonwebtoken"

export const tokenMiddleware = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    let expired = false
    const secret = "veryverystrongsecret"
    const token = req.header("token")
    if (!token) {
        throw new Error("토큰없음")
    }
    try {
        const a = jwt.verify(token, secret)
        console.log(a)
    } catch (error) {
        console.log(error)
        expired = true
        return {
            error
        }
    } finally {
        if (expired) {
            const refreshToken = req.header("refresh")
            if (!refreshToken) {
                throw new Error("넌 못 지나간다")
            }
        }
        const token = jwt.sign({
                data: "ok"
            },
            secret,
            {
                expiresIn: "30"
            }
        )
        res.setHeader('token', token)
        next()
    }

}

