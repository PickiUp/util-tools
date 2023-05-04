<template>
	<div class="area-container">
		<el-input v-model="textarea" :rows="20" type="textarea" placeholder="Please input" class="area" />
		<el-button type="primary" icon="el-icon-d-arrow-right" @click="">
			<DArrowRight style="width: 1em; height: 1em; margin-right: 8px"></DArrowRight>
			转换
		</el-button>
		<el-input v-model="textarea" :rows="20" type="textarea" placeholder="Please input" class="area" />
	</div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const textarea = ref("");
</script>

<style scoped>
.area-container {
	display: flex;
	flex-direction: row;
	flex: 1;
	flex-basis: auto;
	box-sizing: border-box;
	justify-content: space-around;
	margin: 0 153px !important;
}

.area-container textarea {
	width: 80% !important;
}

.area-container .el-button {
	padding: 0 23px 0 3px !important;
	height: 40px !important;
	margin-top: 210px;
}
</style>
