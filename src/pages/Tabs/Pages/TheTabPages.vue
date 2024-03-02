<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithBackButton title="Ionic Sample - Pages" />
        </template>
        <template #default>
            <ion-list>
                <ion-list-header>
                    <ion-label>Pages</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-label router-link="/tab/pages/scroll-down-up">Scroll Down Up</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label router-link="/tab/pages/sample-form">Sample Form</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label router-link="/tab/pages/fire-base-authentication-login">
                        Firebase Authentication
                    </ion-label>
                </ion-item>
            </ion-list>
        </template>
    </LayoutDefault>
</template>

<script lang="ts">
import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import HeaderWithBackButton from '@/components/HeaderWithBackButton.vue';

export default defineComponent({
    components: {
        IonLabel,
        IonListHeader,
        IonList,
        IonItem,
        HeaderWithBackButton,
        LayoutDefault,
    },
    setup() {},
});
</script>

<style scoped></style>
