<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithBackButton title="Ionic Sample - About" />
        </template>
        <template #default>
            <div class="ion-padding">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos quas sint vel? Commodi, in
                    iusto laborum modi molestias nulla obcaecati odio quis recusandae sunt, tempore temporibus tenetur
                    voluptate voluptatum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos quas sint vel? Commodi, in
                    iusto laborum modi molestias nulla obcaecati odio quis recusandae sunt, tempore temporibus tenetur
                    voluptate voluptatum.
                </p>
            </div>
        </template>
    </LayoutDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import HeaderWithBackButton from '@/components/HeaderWithBackButton.vue';

export default defineComponent({
    components: {
        HeaderWithBackButton,
        LayoutDefault,
    },
    setup() {},
});
</script>

<style scoped></style>
