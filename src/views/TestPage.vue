<template>
	<el-row :gutter="20">
		<el-col :span="4">
			<div class="grid-content ep-bg-purple">xxxxxxxxxxxx</div>
		</el-col>
		<el-col :span="10">
			<div class="grid-content ep-bg-purple">yyyyyyyyyyyyyy</div>
		</el-col>
	</el-row>
	<el-tabs type="border-card" class="searchTabs">
		<el-tab-pane :label="SearchEngine">
			<ul>
				<li>
					<el-row :gutter="20">
						<el-col class="grid-content ep-bg-purple" :span="4">
							<div class="site-name">输入关键字：</div>
						</el-col>
						<el-col class="grid-content ep-bg-purple" :span="10">
							<el-input v-model="queryKey" clearable :prefix-icon="Search">
							</el-input>
						</el-col>
					</el-row>


				</li>
				<li>
					<template>
						<el-row :gutter="20">
							<el-col class="grid-content ep-bg-purple" :span="4" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
								<div>{{ google }}
								</div>
							</el-col>
							<el-col class="grid-content ep-bg-purple" :span="10" :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
								<el-input placeholder="请输入访问关键字" :prefix-icon="Search" clearable>
								</el-input>
								<el-button :icon="Search" type="success" />
							</el-col>
						</el-row>
					</template>
				</li>
			</ul>
		</el-tab-pane>
	</el-tabs>
	<el-row :gutter="20">
		<el-col :span="8">
			<div class="grid-content ep-bg-purple" />
		</el-col>
		<el-col :span="8">
			<div class="grid-content ep-bg-purple" />
		</el-col>
		<el-col :span="4">
			<div class="grid-content ep-bg-purple" />
		</el-col>
		<el-col :span="4">
			<div class="grid-content ep-bg-purple" />
		</el-col>
	</el-row>
	<el-row :gutter="20">
		<el-col :span="4">
			<div class="grid-content ep-bg-purple" />
		</el-col>
		<el-col :span="16">
			<div class="grid-content ep-bg-purple" />
		</el-col>
		<el-col :span="4">
			<div class="grid-content ep-bg-purple" />
		</el-col>
	</el-row>
</template>
<script setup>
import { ref, reactive, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
</script>
<style>
.el-row {
	margin-bottom: 20px;
}

.el-row:last-child {
	margin-bottom: 0;
}

.el-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
}

.ep-bg-purple {
	background-color: rgb(193, 164, 193);
}
</style>
  