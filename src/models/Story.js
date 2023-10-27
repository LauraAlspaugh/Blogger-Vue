export class Story {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published

        this.creator = data.creator
    }
}
const storyData = {

    "_id": "6503890f3b199713c0ae1f31",
    "title": "Blog blog",
    "body": "Bloggity blog glob\n",
    "imgUrl": "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    "tags": [],
    "published": true,
    "creatorId": "64ef5d411194166d253dd7e4",
    "createdAt": "2023-09-14T22:28:31.354Z",
    "updatedAt": "2023-09-14T22:28:31.354Z",
    "__v": 0,
    "creator": {
        "_id": "64ef5d411194166d253dd7e4",
        "subs": [
            "auth0|64ef5d4157a3fdb2838810d0"
        ],
        "email": "dasevo@dasevo.com",
        "name": "dasevo",
        "picture": "https://wallpapers.com/images/hd/cool-profile-picture-o6xweez7rh4347gx.jpg",
        "bio": "Eliptical talk. Don’t ever play yourself. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. Cloth talk. In life there will be road blocks but we will over come it. The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key. The key is to drink coconut, fresh coconut, trust me. Eliptical talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. We don’t see them, we will never see them.",
        "coverImg": "https://i.pinimg.com/originals/1f/46/38/1f4638addc8c0c377a8e69901c953582.jpg",
        "github": "https://github.com/LanceFontanilla",
        "linkedin": "https://www.linkedin.com/in/lancefontanilla/",
        "resume": "",
        "class": "Late Summer 2023",
        "graduated": true,
        "createdAt": "2023-08-30T15:16:24.884Z",
        "updatedAt": "2023-09-18T17:15:42.508Z",
        "__v": 0,
        "id": "64ef5d411194166d253dd7e4"
    },
    "id": "6503890f3b199713c0ae1f31"
}
