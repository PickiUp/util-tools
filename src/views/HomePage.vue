<template>
	<div>
		<el-button round>Round</el-button>
		<el-button type="primary" round>Primary</el-button>
		<el-button type="success" round>Success</el-button>
		<el-button type="info" round>Info</el-button>
		<el-button type="warning" round>Warning</el-button>
		<el-button type="danger" round>Danger</el-button>
		<el-button :icon="Search" circle />
		<el-button type="primary" :icon="Edit" circle />
		<el-button type="success" :icon="Check" circle />
		<el-button type="info" :icon="Message" circle />
		<el-button type="warning" :icon="Star" circle />
		<el-button type="danger" :icon="Delete" circle />
	</div>
</template>
<script lang="ts" setup>
import {
	Check,
	Delete,
	Edit,
	Message,
	Search,
	Star,
} from "@element-plus/icons-vue";
</script>
