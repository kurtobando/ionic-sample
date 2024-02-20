<template>
    <ion-page>
        <slot name="header"></slot>
        <ion-content :fullscreen="true">
            <slot></slot>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonPage,
        IonContent,
    },
});
</script>
