<template>
	<div>
		<el-container>
			<CommonTopHeader />
			<!-- 头部工具栏 -->
			<CommonHeaderTool />
			<!-- 头部工具选项栏 -->
			<CommonHeaderSetting />
			<ConvertArea />
			<el-main>Main</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>
<script lang="ts" setup>
import { ref, reactive } from "vue";
import ConvertArea from "./ConvertArea.vue";
import CommonTopHeader from "./CommonTopHeader.vue";
import CommonHeaderTool from "./CommonHeaderTool.vue";

const input = ref("");

// 对表单数据校验
const isValid = function (text) {
	// 判断：输入的内容不为空
	if (text.length !== 0) {
	} else {
		// debugger;
		// this.placeholder = "输入的内容不能为空！";
		console.log("值不能为空哦");
	}
};
console.log("onchange: ", onchange);

/* const getResults = () => {
	let results = "";
	// 数据校验...
	// 1.判断 输入的内容不能为空
	for (let setingValue in headerSettingValue) {
		if (setingValue.length !== 0) {
			// 判断 triggerTextList 是否有多个 ","
			//获取第一次出现指定字符的位置
			let firstIndex = headerSettingValue[3].indexOf(",");
			//获取最后一次出现指定字符的位置
			let lastIndex = headerSettingValue[3].lastIndexOf(",");
			// 判断 “触发字符列表" 不为空，且有多个触发，字符
			if (
				headerSettingValue[3].length > 1 &&
				firstIndex !== -1 &&
				lastIndex !== -1 &&
				firstIndex !== lastIndex
			) {
			}
		} else {
		}
	}

	return headerSettingValue.triggerText;
}; */
</script>

<style scoped>
.header-tool .el-button {
	margin: 0 15px !important;
}

.el-header.header-setting {
	background-color: rgb(200, 233, 255);
	display: flex;
	justify-content: space-between;
	text-align: center;
}

.el-header.header-setting .select-dropDown {
	text-align: center;
	display: flex;
	flex-direction: column;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
