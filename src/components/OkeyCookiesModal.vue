<script setup>
import { marked } from "marked";

const emit = defineEmits(["approval"]);

const props = defineProps([
	"cookiesFullAgreementLink",
	"termsAndPoliciesLink",
	"okidokiFlag",
	"cookiesRequiredNotice",
]);

function agreeAction() {
	emit("approval");
}
</script>

<template>

    <div :class="'modal ' + ((props.okidokiFlag) ? '' : 'is-active')">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">This site requires cookies to work well</p>
                <button class="delete" aria-label="close" @click="agreeAction"></button>
            </header>
            <section class="modal-card-body" v-html="marked.parse(props.cookiesRequiredNotice)">
            </section>
            <footer class="modal-card-foot">
                <div class="buttons">
                    <button class="button is-success" @click="agreeAction">OK</button>
                    <button class="button" @click="agreeAction">Close</button>
                </div>
            </footer>
        </div>
    </div>

</template>

<style lang="css" scoped></style>