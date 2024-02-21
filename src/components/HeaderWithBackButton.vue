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

<script lang="ts">
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonTitle,
    },
    props: {
        title: {
            type: String,
            default: '',
            required: false,
        },
    },
});
</script>

<style lang="scss" scoped></style>
