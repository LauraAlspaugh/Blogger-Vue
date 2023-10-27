<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 text-center m-3 blog-title">
        <h1>The Blog <i class="mdi mdi-feather"></i></h1>
      </div>
    </section>
    <section class="row">
      <div v-for="story in stories" :key="story.id" class="col-12">
        <StoryCard :storyProp="story" />
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import { storiesService } from '../services/StoriesService.js';
import { AppState } from '../AppState.js';
import StoryCard from '../components/StoryCard.vue';



export default {
  setup() {
    onMounted(() => {
      getStories();
    });
    async function getStories() {
      try {
        await storiesService.getStories();
      }
      catch (error) {
        logger.error(error);
      }
    }
    return {
      stories: computed(() => AppState.stories)
    };
  },
  components: { StoryCard }
}
</script>

<style scoped lang="scss">
.blog-title {
  font-size: 90px;
  font-family: fantasy;
  font-weight: bold;
  color: black;
}
</style>
