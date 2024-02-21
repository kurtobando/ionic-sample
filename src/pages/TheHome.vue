<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithBackButton title="Ionic Sample" />
        </template>
        <template #default>
            <ion-list>
                <ion-list-header>
                    <ion-label>Pages</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-label router-link="/scroll-down-up"> Scroll Down Up </ion-label>
                </ion-item>
            </ion-list>
        </template>
    </LayoutDefault>
</template>

<script lang="ts">
import { IonList, IonListHeader, IonLabel, IonItem } from '@ionic/vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import HeaderWithBackButton from '@/components/HeaderWithBackButton.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IonList,
        IonListHeader,
        IonLabel,
        IonItem,
        LayoutDefault,
        HeaderWithBackButton,
    },
});
</script>

<style scoped></style>
