<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet />
            <ion-tab-bar slot="bottom">
                <ion-tab-button
                    href="/tab/home"
                    tab="tab-home">
                    <ion-icon
                        :icon="home"
                        :size="'small'">
                    </ion-icon>
                    <ion-label>Home</ion-label>
                </ion-tab-button>
                <ion-tab-button
                    href="/tab/pages"
                    tab="tab-pages">
                    <ion-icon
                        :icon="albumsOutline"
                        :size="'small'">
                    </ion-icon>
                    <ion-label>Pages</ion-label>
                </ion-tab-button>
                <ion-tab-button
                    href="/tab/about"
                    tab="tab-about">
                    <ion-icon
                        :icon="helpCircleOutline"
                        :size="'small'">
                    </ion-icon>
                    <ion-label>About</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { albumsOutline, helpCircleOutline, home } from 'ionicons/icons';
import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';

export default defineComponent({
    components: {
        IonRouterOutlet,
        IonTabBar,
        IonLabel,
        IonTabs,
        IonTabButton,
        IonPage,
        IonIcon,
    },
    setup() {
        return {
            home,
            albumsOutline,
            helpCircleOutline,
        };
    },
});
</script>

<style scoped></style>
