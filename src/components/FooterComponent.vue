<script>
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue';
export default {
	components: { FooterCopyright },
	data() {
		return {
			socials: [
				{
					id: 1,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/engaarshan',
				},
				{
					id: 2,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/engaarshan',
				},
				{
					id: 3,
					name: 'Medium',
					icon: 'book',
					url: 'https://engaarshan.medium.com',
				},
				{
					id: 4,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/engaarshan',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="container mx-auto ">
		<div
			class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
		>
			<!-- Footer links -->


			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<style scoped></style>
