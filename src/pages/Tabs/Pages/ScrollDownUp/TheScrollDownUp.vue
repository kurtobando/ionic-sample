<template>
    <ion-page>
        <HeaderWithBackButton title="Scroll Down Up" />
        <ion-content
            ref="content"
            class="ion-padding">
            <ion-button
                :expand="'block'"
                @click="onScrollDown()">
                Scroll Down
            </ion-button>
            <p>
                Est aliqua cillum anim Lorem cillum culpa qui adipisicing cillum. Eu anim aute irure officia est Lorem
                aute do. Nostrud laboris id laboris incididunt tempor. Duis et adipisicing et consectetur qui laborum
                veniam dolor ipsum deserunt. Cillum aute voluptate consequat eu nisi dolore deserunt dolor. Qui
                exercitation est esse anim laborum nulla.
            </p>
            <p>
                Est aliqua cillum anim Lorem cillum culpa qui adipisicing cillum. Eu anim aute irure officia est Lorem
                aute do. Nostrud laboris id laboris incididunt tempor. Duis et adipisicing et consectetur qui laborum
                veniam dolor ipsum deserunt. Cillum aute voluptate consequat eu nisi dolore deserunt dolor. Qui
                exercitation est esse anim laborum nulla.
            </p>
            <p>
                Est aliqua cillum anim Lorem cillum culpa qui adipisicing cillum. Eu anim aute irure officia est Lorem
                aute do. Nostrud laboris id laboris incididunt tempor. Duis et adipisicing et consectetur qui laborum
                veniam dolor ipsum deserunt. Cillum aute voluptate consequat eu nisi dolore deserunt dolor. Qui
                exercitation est esse anim laborum nulla.
            </p>
            <p>
                Est aliqua cillum anim Lorem cillum culpa qui adipisicing cillum. Eu anim aute irure officia est Lorem
                aute do. Nostrud laboris id laboris incididunt tempor. Duis et adipisicing et consectetur qui laborum
                veniam dolor ipsum deserunt. Cillum aute voluptate consequat eu nisi dolore deserunt dolor. Qui
                exercitation est esse anim laborum nulla.
            </p>
            <p>
                Est aliqua cillum anim Lorem cillum culpa qui adipisicing cillum. Eu anim aute irure officia est Lorem
                aute do. Nostrud laboris id laboris incididunt tempor. Duis et adipisicing et consectetur qui laborum
                veniam dolor ipsum deserunt. Cillum aute voluptate consequat eu nisi dolore deserunt dolor. Qui
                exercitation est esse anim laborum nulla.
            </p>
            <p>
                Est aliqua cillum anim Lorem cillum culpa qui adipisicing cillum. Eu anim aute irure officia est Lorem
                aute do. Nostrud laboris id laboris incididunt tempor. Duis et adipisicing et consectetur qui laborum
                veniam dolor ipsum deserunt. Cillum aute voluptate consequat eu nisi dolore deserunt dolor. Qui
                exercitation est esse anim laborum nulla.
            </p>
            <ion-button
                :expand="'block'"
                @click="onScrollUp()">
                Scroll Up
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IonButton, IonContent, IonPage } from '@ionic/vue';
import HeaderWithBackButton from '@/components/HeaderWithBackButton.vue';

export default defineComponent({
    components: {
        IonButton,
        IonContent,
        IonPage,
        HeaderWithBackButton,
    },
    setup() {
        const content = ref<InstanceType<typeof IonContent> | null>(null);

        function onScrollDown() {
            content.value?.$el.scrollToBottom(1000);
        }
        function onScrollUp() {
            content.value?.$el.scrollToTop(1000);
        }

        return {
            content,
            onScrollDown,
            onScrollUp,
        };
    },
});
</script>
