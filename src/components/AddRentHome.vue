<template>
	<ion-toolbar>
		<ion-title>Add Home</ion-title>
	</ion-toolbar>
	<form class="ion-padding" @submit.prevent="submitForm">
		<ion-list>
			<ion-item>
				<ion-label position="floating"> Location </ion-label>
				<ion-input type="text" required v-model="location" />
			</ion-item>
			<ion-item>
				<ion-label position="floating"> Image URL </ion-label>
				<ion-input type="url" required v-model="imgUrl" />
			</ion-item>
			<ion-item>
				<ion-label position="floating"> Description </ion-label>
				<ion-textarea rows="5" v-model="description"></ion-textarea>
			</ion-item>
			<ion-item>
				<ion-label position="floating"> Cost </ion-label>
				<ion-input type="text" required v-model="cost" />
			</ion-item>
		</ion-list>
		<ion-button expand="block" fill="outline" type="submit">Save</ion-button>
	</form>
</template>

<script>
import {
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	IonTextarea,
	IonButton,
} from '@ionic/vue';
export default {
	emits: ['save-memory'],
	components: {
		IonList,
		IonItem,
		IonLabel,
		IonInput,
		IonTextarea,
		IonButton,
	},
	data() {
		return {
			location: '',
			imgUrl: '',
			description: '',
			cost: '',
		};
	},
	methods: {
		submitForm() {
			const homeData = {
				location: this.location,
				image: this.imgUrl,
				description: this.description,
				cost: this.cost,
			};
			this.$emit('save-memory', homeData);
		},
	},
};
</script>

<style></style>
