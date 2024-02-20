<template>
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-back-button />
            </ion-buttons>
            <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts" setup>
import {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
} from '@ionic/vue';
import { defineComponent } from 'vue';

defineProps({
    title: {
        type: String,
        default: '',
        required: false,
    },
});

defineComponent({
    components: {
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
    },
});
</script>

<style lang="scss" scoped></style>
