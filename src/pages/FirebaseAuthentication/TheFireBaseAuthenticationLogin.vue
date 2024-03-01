<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithBackButton title="Login Form" />
        </template>
        <template #default>
            <ion-list>
                <ion-list-header>
                    <ion-label>Login</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-input
                        v-model="form.email"
                        :label="'Email Address'"
                        :type="'email'"
                        :clear-input="true">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-input
                        v-model="form.password"
                        :label="'Password'"
                        :type="'password'"
                        :clear-input="true">
                    </ion-input>
                </ion-item>
            </ion-list>
            <ion-button
                class="ion-padding"
                :expand="'block'"
                @click="onLogin">
                Login
            </ion-button>
        </template>
    </LayoutDefault>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
    IonInput,
    IonLabel,
    IonButton,
    IonList,
    IonListHeader,
    IonItem,
    alertController,
    loadingController,
} from '@ionic/vue';
import { useFirebaseAuth } from 'vuefire';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import HeaderWithBackButton from '@/components/HeaderWithBackButton.vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';

export default defineComponent({
    components: {
        IonInput,
        IonButton,
        IonLabel,
        IonList,
        IonListHeader,
        IonItem,
        LayoutDefault,
        HeaderWithBackButton,
    },
    setup() {
        const auth = useFirebaseAuth()!;
        const form = ref({
            email: '',
            password: '',
        });

        async function onAlertIncorrectCredentials() {
            const alert = await alertController.create({
                header: 'Incorrect Credentials',
                message: 'The email or password is incorrect.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {},
                    },
                ],
            });
            await alert.present();
        }
        async function onAlertSomethingWentWrong() {
            const alert = await alertController.create({
                header: 'I cant find your account.',
                message: 'Make sure complete the login form. Please try again later.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {},
                    },
                ],
            });
            await alert.present();
        }
        async function onAlertWelcome() {
            const alert = await alertController.create({
                header: 'Welcome',
                message: 'You are now logged in.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {},
                    },
                ],
            });
            await alert.present();
        }
        async function onLogin() {
            const loading = await loadingController.create({
                message: 'Please wait...',
                spinner: 'crescent',
            });

            try {
                await loading.present();
                const response = await signInWithEmailAndPassword(auth, form.value.email, form.value.password);

                // redirect to dashboard
                console.log(response.user.email);
                await onAlertWelcome();
            } catch (error) {
                await loading.dismiss();
                // we can type hint firebase error here
                // see https://stackoverflow.com/questions/64156411/how-to-type-firebase-js-sdk-errors-in-try-catch-blocks
                // see https://stackoverflow.com/questions/42618089/how-do-you-use-typed-errors-in-async-catch

                if (error instanceof FirebaseError) {
                    if (error.code === AuthErrorCodes.INVALID_EMAIL || error.code === AuthErrorCodes.INVALID_PASSWORD) {
                        return await onAlertIncorrectCredentials();
                    } else {
                        return await onAlertSomethingWentWrong();
                    }
                }

                // handle the reset of the errors here
                console.error(error);
            } finally {
                await loading.dismiss();
            }
        }

        return {
            form,
            onLogin,
        };
    },
});
</script>

<style scoped></style>
