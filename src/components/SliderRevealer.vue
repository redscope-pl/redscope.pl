<script setup>
import { onMounted } from "vue";

//import Reveal from 'reveal.js'
//import Markdown from 'reveal.js/plugin/markdown/markdown.js'
//import Highlight from 'reveal.js/plugin/highlight/highlight.js'
//import 'reveal.js/dist/reveal.css'
//import 'reveal.js/dist/theme/black.css'
//import 'reveal.js/plugin/highlight/monokai.css'
// Reveal.initialize({
//     plugins: [Markdown, Highlight],
//     markdown: {
//         breaks: true,
//         gfm: true
//     }
// })
onMounted(() => {});

//import Reveal from 'reveal.js';
// import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
// import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
// import Notes from 'reveal.js/plugin/notes/notes.esm.js';
// import MathTex from 'reveal.js/plugin/math/math.esm.js';

//
</script>



<template>
    <section class="section is-medium">
        <h1 class="title">Medium section</h1>
        <h2 class="subtitle">
            A simple container to divide your page into <strong>sections</strong>, like
            the one you're currently reading.
        </h2>
    </section>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
                <p>
                    <strong>Barbara Middleton</strong>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros
                    lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris
                    sit amet dolor blandit rutrum. Nunc in tempus turpis.
                    <br />
                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
                </p>
            </div>

            <article class="media">
                <figure class="media-left">
                    <p class="image is-48x48">
                        <img src="https://bulma.io/assets/images/placeholders/96x96.png" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Sean Brown</strong>
                            <br />
                            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
                            habitant morbi tristique senectus et netus et malesuada fames ac
                            turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis
                            leo feugiat.
                            <br />
                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                        </p>
                    </div>

                    <article class="media">
                        Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem
                        cursus ullamcorper sit amet nec massa.
                    </article>

                    <article class="media">
                        Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
                        Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
                        tincidunt iaculis diam non, porta aliquet tortor.
                    </article>
                </div>
            </article>

            <article class="media">
                <figure class="media-left">
                    <p class="image is-48x48">
                        <img src="https://bulma.io/assets/images/placeholders/96x96.png" />
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>Kayli Eunice </strong>
                            <br />
                            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
                            Maecenas varius felis sit amet magna vestibulum euismod malesuada
                            cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id
                            feugiat.
                            <br />
                            <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    </article>

    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
                <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
            </p>
        </figure>
        <div class="media-content">
            <div class="field">
                <p class="control">
                    <textarea class="textarea" placeholder="Add a comment..."></textarea>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button">Post comment</button>
                </p>
            </div>
        </div>
    </article>
</template>

<style scoped></style>