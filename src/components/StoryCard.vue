<template>
    <router-link :to="{ name: 'Blogger', params: { bloggerId: storyProp.creator.id } }">
        <div class="container-fluid">
            <section class="row rounded bg-light shadow my-3">
                <div class="col-7 p-4">
                    <img class="rounded-circle creator-card" :src="storyProp.creator.coverImg"
                        :alt="storyProp.creator.name">{{
                            storyProp.creator.name }}
                    <p class="fs-1">{{ storyProp.title }}</p>
                    <p>{{ storyProp.body }}</p>
                </div>
                <div class="col-5 p-0">
                    <img :src="storyProp.imgUrl" :alt="storyProp.name">
                </div>
            </section>
        </div>
    </router-link>
</template>


<script>
import { computed } from 'vue';
import { Story } from '../models/Story.js';
import { AppState } from '../AppState.js';

export default {
    props: { storyProp: { type: Story, required: true } },
    setup() {
        return {
            account: computed(() => AppState.account)
        }

    }
}
</script>


<style lang="scss" scoped>
img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    object-position: center;
}

.creator-card {
    height: 5rem;
    width: 5rem;
    padding: 4px;
}
</style>