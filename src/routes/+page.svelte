<script lang="ts">
	import axios from 'axios';

	type State = {
		id: number;
		value: string;
	};

	export let data;
	let countryid: number;
	let stateid: number | null;
	let states: State[] | null;
	let darkMode: boolean = false;

	const getCities = async () => {
		states = null;
		stateid = null;
		const response = await axios({
			method: 'GET',
			url: `/api/states?countryid=${countryid}`
		});

		states = response.data;
	};

	const toggleDarkMode = () => {
		darkMode = !darkMode;
		window.document.body.classList.toggle('dark');
	};

	$: getCountryName = () => data.countries.filter((c: State) => c.id === countryid)[0];
	$: getStateName = () => states?.filter((s: State) => s.id === stateid)[0];
</script>

<div class="w-full h-screen flex flex-col justify-center items-center gap-6">
	<div class="p-2 bg-white dark:bg-gun-powder dark:text-white rounded-lg">
		<button on:click={toggleDarkMode}>Dark Mode {!darkMode ? 'On' : 'Off'}</button>
	</div>
	<div>
		<select
			bind:value={countryid}
			on:change={getCities}
			class="p-2 rounded-lg w-60 bg-gray-300 dark:bg-slate-500"
		>
			<option value="">Select a country</option>
			{#each data.countries as c}
				<option value={c.id}>{c.value}</option>
			{/each}
		</select>
		<select
			bind:value={stateid}
			disabled={!countryid}
			class="p-2 rounded-lg w-60 bg-gray-300 dark:bg-slate-500"
		>
			<option value={null}>Choose a state</option>
			{#if states}
				{#each states as state}
					<option value={state.id}>{state.value}</option>
				{/each}
			{/if}
		</select>
	</div>
	{#if countryid}
		<p class="dark:text-white">Selected country is {getCountryName().value}</p>
	{/if}
	{#if stateid}
		<p class="dark:text-white">Selected state is {getStateName()?.value}</p>
	{/if}
	<p></p>
</div>

<style lang="postcss">
	:global(body) {
		background-color: #f1f1f1;
	}

	:global(body.dark) {
		background-color: #272640;
	}
</style>
