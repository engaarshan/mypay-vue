<script>
import feather from 'feather-icons';

export default {
	props: ['isOpen'],
};
</script>

<template>
	<!-- Header links -->
	<!-- isOpen true = block or isOpen false = hidden -->
	<div
		:class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
	>
		<router-link
			to="/"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-orange-600 dark:hover:text-orange-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="Dashboard"
			>Dashboard</router-link
		>
		<router-link
			to="/transactions"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-orange-600 dark:hover:text-orange-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="Transactions"
			>Transactions</router-link
		>
		<router-link
			to="/customers"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-orange-600 dark:hover:text-orange-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="Customers"
			>Customers</router-link
		>
		
		<router-link
			to="/settings"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-orange-600 dark:hover:text-orange-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="Settings"
			>Settings</router-link
		>
		<div
			class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
		>
			<button
				class="font-general-medium sm:hidden block text-left text-md font-medium bg-orange-500 hover:bg-orange-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
				aria-label="Logout"
			>
				Logout
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
