import { AppState } from "../AppState.js"
import { Story } from "../models/Story.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


api

class StoriesService {
    async getStories() {
        const res = await api.get('api/blogs')
        logger.log('getting stories', res.data)
        const newStories = res.data.map(pojo => new Story(pojo))
        AppState.stories = newStories
    }
}
export const storiesService = new StoriesService()