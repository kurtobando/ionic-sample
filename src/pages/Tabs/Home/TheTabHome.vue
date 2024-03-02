<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithBackButton title="Ionic Sample - Home" />
        </template>
        <template #default>
            <p class="ion-padding">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eos quas sint vel? Commodi, in iusto
                laborum modi molestias nulla obcaecati odio quis recusandae sunt, tempore temporibus tenetur voluptate
                voluptatum.
            </p>
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
