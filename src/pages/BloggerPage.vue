<template>
    <div class="container-fluid">
        <section v-if="blogger" class="row">
            <div class="col-12 p-4 text-center"><img class="rounded-circle creator-card" :src="blogger.coverImg"
                    :alt="blogger.name">
                <h3>{{ blogger.name }}</h3>
            </div>
        </section>
    </div>
    <div v-for="story in stories" :key="story.id">

        <StoryCard :storyProp="story" />

    </div>



    <!-- <StoryCard :storyProp="story" /> -->
</template>


<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { useRoute } from 'vue-router';
import { bloggerService } from '../services/BloggerService.js'
import { AppState } from '../AppState.js';
import StoryCard from '../components/StoryCard.vue';


export default {
    setup() {
        onMounted(() => {
            getBlogger();
            getStoriesByBloggerId();
        });
        const route = useRoute();
        async function getBlogger() {
            try {
                const bloggerId = route.params.bloggerId;
                logger.log(bloggerId);
                await bloggerService.getBlogger(bloggerId);
            }
            catch (error) {
                logger.error(error);
            }
        }
        async function getStoriesByBloggerId() {
            try {
                const bloggerId = route.params.bloggerId;
                logger.log(bloggerId);
                await bloggerService.getStoriesByBloggerId(bloggerId);
            }
            catch (error) {
                logger.error(error);
            }
        }
        return {
            stories: computed(() => AppState.stories),
            blogger: computed(() => AppState.blogger)

        };
    },
    components: { StoryCard }
}
</script>


<style lang="scss" scoped>
.creator-card {
    height: 5rem;
    width: 5rem;
    padding: 4px;
}
</style>