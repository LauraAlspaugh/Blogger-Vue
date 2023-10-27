import { AppState } from "../AppState.js"
import { Blogger } from "../models/Blogger.js"
import { Story } from "../models/Story.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class BloggerService {
    async getBlogger(bloggerId) {
        AppState.blogger = null
        const res = await api.get(`api/profiles/${bloggerId}`)
        logger.log(res.data)
        AppState.blogger = new Blogger(res.data)
    }
    async getStoriesByBloggerId(bloggerId) {
        const res = await api.get(`api/blogs?creatorId=${bloggerId}`)
        logger.log(res.data)
        AppState.stories = res.data.map((story) => new Story(story))
    }
}
export const bloggerService = new BloggerService()