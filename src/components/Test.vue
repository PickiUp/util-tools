<template>
	<el-select class="normal-space" v-model="value" placeholder="请选择">
		<el-option
			v-for="item in options"
			:key="item.value"
			:label="item.label"
			:value="item.value"
			:popper-append-to-body="false"
		>
		</el-option>
	</el-select>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");

const options = [
	{
		value: "Option1",
		label: "Option1",
	},
	{
		value: "Option2",
		label: "Option2",
	},
	{
		value: "Option3",
		label: "Option3",
	},
	{
		value: "Option4",
		label: "Option4",
	},
	{
		value: "Option5",
		label: "Option5",
	},
];

console.log(JSON.stringify);
</script>
