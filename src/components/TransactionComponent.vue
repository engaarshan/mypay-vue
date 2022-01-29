<template>
<div class="mt-10 sm:px-6 w-full">
    <div class="px-4 md:px-10 py-4 md:py-7">
        <div class="flex items-center justify-between">
            <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-orange-500">Latest Transections</p>
            <div class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                    <option class="text-sm text-indigo-800">Debts</option>
                    <option class="text-sm text-indigo-800">Amaano</option>
                </select>
            </div>
        </div>
    </div>
    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div class="sm:flex items-center justify-between">
            <div class="flex items-center">
                <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-orange-50 focus:ring-gary-800" href=" #">
                    <div class="py-2 px-8 bg-orange-100 text-orange-600 rounded-full">
                        <p>All</p>
                    </div>
                </a>
                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-orange-50 focus:ring-gary-800 ml-4 sm:ml-8" href="#">
                    <div class="py-2 px-8 text-orange-600 hover:text-gary-700 hover:bg-orange-100 rounded-full ">
                        <p>Debts</p>
                    </div>
                </a>
                <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-orange-50 focus:ring-gary-800 ml-4 sm:ml-8" href="#">
                    <div class="py-2 px-8 text-orange-600 hover:text-gary-700 hover:bg-orange-100 rounded-full ">
                        <p>Amaano</p>
                    </div>
                </a>
            </div>
            <button @click="showModal()" class="focus:ring-2 focus:ring-offset-2 focus:ring-dark-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-orange-600 hover:bg-orange-600 focus:outline-none rounded">
                <p class="text-sm font-medium leading-none text-white">Add Transaction</p>
            </button>
        </div>
        <div class="mt-7 overflow-x-auto">
            <table class="w-full whitespace-nowrap">
                <tbody>
                    <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                        <td>
                            <div class="ml-5">
                                <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div class="check-icon hidden bg-orange-700 text-white rounded-sm">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg7.svg" alt="check-icon">
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="">
                            <div class="flex items-center pl-5">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">Cali Osoble</p>
                            </div>
                        </td>
                        <td class="pl-24">
                            <div class="flex items-center">
                                <p class="text-md font-bold leading-none text-gray-600 ml-2">$20</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">
                                <p class="text-sm leading-none text-gray-600 ml-2">01/01/2022</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">
                                <p class="text-sm leading-none text-gray-600 ml-2">Biilka bisha</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">
                                <p class="text-sm leading-none text-gray-600 ml-2">Due: 04/07/2022</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Not Paid</button>
                        </td>
                        <td class="pl-4">
                            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                        </td>
                    </tr>
                    <tr class="h-3"></tr>
                                        <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                        <td>
                            <div class="ml-5">
                                <div class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    <div class="check-icon hidden bg-orange-700 text-white rounded-sm">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg7.svg" alt="check-icon">
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="">
                            <div class="flex items-center pl-5">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">Maama Seynab</p>
                            </div>
                        </td>
                        <td class="pl-24">
                            <div class="flex items-center">
                                <p class="text-md font-bold leading-none text-gray-600 ml-2">$500</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">
                                <p class="text-sm leading-none text-gray-600 ml-2">08/03/2022</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">
                                <p class="text-sm leading-none text-gray-600 ml-2">Adeeg maalinle</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <div class="flex items-center">
                                <p class="text-sm leading-none text-gray-600 ml-2">Due: 04/07/2021</p>
                            </div>
                        </td>
                        <td class="pl-5">
                            <button class="py-3 px-3 text-sm focus:outline-none leading-none text-white bg-green-500 rounded">Paid</button>
                        </td>
                        <td class="pl-4">
                            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <TransactionModal
        :showModal="showModal"
        :modal="modal"
        aria-modal="Tran Modal"
    />

</div>
</template>
<script>

import TransactionModal from './TransactionModal.vue';

export default {
	name: 'TransactionComponent',
    components: {
        TransactionModal,
	},
    data() {
    return {
		modal: false,
    };
  },
  methods: {
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
	},
}
</script>

<style>

</style>