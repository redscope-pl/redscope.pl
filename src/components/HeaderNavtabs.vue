<script setup>
import { RouterLink } from "vue-router";

import { PowerGlitch } from "powerglitch";

setInterval(() => PowerGlitch.glitch(".logotext"), 3000);
</script>

<template>
    <header class="container is-fluid hero has-background-light is-large">
        <canvas id="backgroundImpresionCanvas"></canvas>
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">

                        </a>
                        <span class="navbar-burger" data-target="navbarMenuHeroB">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroB" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item is-active"> Home </a>
                            <a class="navbar-item"> Examples </a>
                            <a class="navbar-item"> Documentation </a>
                            <span class="navbar-item">
                                <a class="button is-info is-inverted">
                                    <span class="icon">
                                        <i class="fab fa-github"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <div class="hero-body">
            <div class="container has-text-centered">
                <p class="title">
                    <img class="logotext" style="filter: drop-shadow(-3px 3px 0.75rem crimson) drop-shadow( -1px -3px 1px red) drop-shadow(3px -3px 0.75rem grey);" src="/img/redscope-logotext.png" alt="Logo" />
                </p>
                <p class="subtitle">Subtitle</p>
            </div>
        </div>

        <div class="hero-foot">
            <nav class="tabs is-centered is-boxed">
                <ul>
                    <li class="is-active">
                        <RouterLink to="/">
                            <span class="icon is-small">
                                &#x1F441;
                            </span>
                            <span>Homepage</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">
                            <span class="icon is-small">
                                &#x001F;
                            </span>
                            <span>More about Us</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <span class="icon is-small">
                                &#x26E7;
                            </span>
                            <span>Our projects</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <span class="icon is-small">
                                &#x1F7D9;
                            </span>
                            <span>Contact Us</span>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="css">
.logotext {
    width: 400px;
    min-height: 150px;
}

header.hero div {
    z-index: 10;
}

#backgroundImpresionCanvas {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: 0;
}

header nav.tabs li.is-active span {
    color: #ff0000 !important;
}
</style>