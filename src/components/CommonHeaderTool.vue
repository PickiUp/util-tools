<template>
	<div>
		<!-- 头部工具栏 -->
		<el-header class="header-tool">
			<el-button type="danger"
				><Delete
					style="width: 1em; height: 1em; margin-right: 8px"
				/>清除</el-button
			>
			<el-button type="success" @click="dialogVisible = true"
				><DataBoard
					style="width: 1em; height: 1em; margin-right: 8px"
				></DataBoard
				>示例</el-button
			>
			<el-dialog
				v-model="dialogVisible"
				title="Tips"
				width="30%"
				:before-close="handleClose"
			>
				<span>This is a message</span>
				<template #footer>
					<span class="dialog-footer">
						<el-button @click="dialogVisible = false">Cancel</el-button>
						<el-button type="primary" @click="dialogVisible = false">
							Confirm
						</el-button>
					</span>
				</template>
			</el-dialog>
			<el-button type="primary">
				<DocumentCopy
					style="width: 1em; height: 1em; margin-right: 8px"
				></DocumentCopy>
				复制结果</el-button
			>
		</el-header>
	</div>
</template>

<script setup>
import { ref, reactive } from "vue";
const dialogVisible = ref(false);

const handleClose = (done) => {
	ElMessageBox.confirm("Are you sure to close this dialog?")
		.then(() => {
			done();
		})
		.catch(() => {
			// catch error
		});
};
</script>
