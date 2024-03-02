<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithBackButton title="Sample Form" />
        </template>
        <template #default>
            <ion-list>
                <ion-list-header>
                    <ion-label>Registration Form</ion-label>
                </ion-list-header>
                <ion-item>
                    <ion-input
                        v-model="form.name"
                        :clear-input="true"
                        label="Name">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-input
                        v-model="form.email"
                        :clear-input="true"
                        label="Email"
                        type="email">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-select
                        v-model="form.gender"
                        label="Choose Gender">
                        <ion-select-option value="male"> Male </ion-select-option>
                        <ion-select-option value="female"> Female </ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-input
                        v-model="form.password"
                        :clear-input="true"
                        label="Password"
                        type="password">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-input
                        v-model="form.confirmPassword"
                        :clear-input="true"
                        label="Confirm Password"
                        type="password">
                    </ion-input>
                </ion-item>
                <ion-item>
                    <ion-label>Date of Birth</ion-label>
                    <ion-datetime-button datetime="datetime"></ion-datetime-button>
                </ion-item>
                <ion-item>
                    <ion-textarea
                        v-model="form.about"
                        :auto-grow="true"
                        :counter="true"
                        :maxlength="120"
                        label="Tell me about yourself"
                        label-placement="stacked">
                    </ion-textarea>
                </ion-item>
            </ion-list>
            <ion-button
                class="ion-padding"
                expand="block"
                @click="onSubmit()">
                Register
            </ion-button>
            <ion-alert
                :buttons="alertButtons"
                :is-open="alertIsOpen"
                header="Sample Header"
                message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aperiam corporis, dolorum excepturi facere hic ipsum iste, itaque laboriosam minima nihil, nobis perferendis perspiciatis quam quidem reiciendis saepe totam."
                sub-header="Sample Sub Header">
            </ion-alert>
            <ion-modal :keep-contents-mounted="true">
                <ion-datetime
                    id="datetime"
                    :show-default-buttons="true"
                    presentation="date"
                    @ionChange="onChangeDate">
                </ion-datetime>
            </ion-modal>
        </template>
    </LayoutDefault>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import {
    DatetimeChangeEventDetail,
    IonAlert,
    IonButton,
    IonDatetime,
    IonDatetimeButton,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonTextarea,
} from '@ionic/vue';
import { IonDatetimeCustomEvent } from '@ionic/core/dist/types/components';
import HeaderWithBackButton from '@/components/HeaderWithBackButton.vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';

export default defineComponent({
    components: {
        IonButton,
        IonList,
        IonItem,
        IonInput,
        IonListHeader,
        IonTextarea,
        IonLabel,
        IonSelect,
        IonSelectOption,
        IonAlert,
        IonDatetime,
        IonDatetimeButton,
        IonModal,
        LayoutDefault,
        HeaderWithBackButton,
    },
    setup() {
        const form = ref({
            name: '',
            email: '',
            gender: '',
            password: '',
            confirmPassword: '',
            date: '',
            about: '',
        });
        const alertIsOpen = ref(false);
        const alertButtons = [
            {
                text: 'Accept',
                role: 'accept',
                handler: onAlertAccept,
            },
            {
                text: 'Cancel',
                role: 'cancel',
                handler: onAlertCancel,
            },
        ];

        function onAlertAccept() {
            alertIsOpen.value = false;
            console.log('Form Submitted');
            console.log(form.value);
        }
        function onAlertCancel() {
            alertIsOpen.value = false;
            console.log('Cancelled');
        }
        function onChangeDate(e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>) {
            form.value.date = e.detail.value as string;
        }
        function onSubmit() {
            alertIsOpen.value = true;
        }

        return {
            alertIsOpen,
            alertButtons,
            form,
            onSubmit,
            onChangeDate,
        };
    },
});
</script>

<style scoped></style>
