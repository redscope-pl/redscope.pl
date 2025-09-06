<script setup>
import Particles from "particlesjs";
//import SliderRevealer from './SliderRevealer.vue';
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
	Particles.init({
		selector: "#backgroundImpresionCanvas",
		connectParticles: true,
		//color: "#aaa0000",
		//maxParticles: (1000<(window.innerWidth+window.innerHeight)/2)?420:100
		maxParticles: 123,
	});
});

onUnmounted(() => {});
</script>

<template>



    <section class="section is-medium">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like
            the one you're currently reading.
        </h2>
    </section>
    <nav class="level">
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
            </div>
        </div>
        <div class="level-item has-text-centered">
            <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
            </div>
        </div>
    </nav>



</template>
<style lang="css" scoped></style>