'use strict'

class SessionController {
    async create({request, auth}) {
        const {email, password} = request.all()
        return await auth.withRefreshToken().attempt(email, password)
    }
    async refreshToken({request, auth}) {
        const refreshToken = request.input('refresh_token')
        return auth.newRefreshToken().generateForRefreshToken(refreshToken, true)
    }
}

module.exports = SessionController
