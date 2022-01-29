<template>
	<div class="container mx-auto ">
		<div
			class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
		>

			<!-- Footer copyright -->
			<FooterCopyright />
		</div>
	</div>
</template>

<script>
import FooterCopyright from './FooterCopyright.vue';
export default {
	name:"FooterComponent",
	components: { FooterCopyright },
};
</script>

<style scoped></style>
