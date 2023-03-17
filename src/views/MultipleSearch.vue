<template>
	<CommonTopHeader />
	<el-row class="title">
		<h1>你就不能搜索一下吗?</h1>
	</el-row>
	<el-tabs type="border-card" class="searchTabs">
		<el-tab-pane :label="value[0]" v-for="(value, key, index) in tabs" :key="index">
			<ul>
				<li>
					<el-row :gutter="20">
						<el-col class="grid-content" :span="4">
							<div>输入关键字：</div>
						</el-col>
						<el-col class="grid-content" :span="10">
							<el-input v-model="queryKey" clearable :prefix-icon="Search">
							</el-input>
						</el-col>
						<el-col v-show="false" class="grid-content" :span="10">
							<el-button :icon="Search" type="success" />
						</el-col>
					</el-row>
				</li>
				<li v-for="(siteValue, index) in value" :key="index">
					<template v-if="index > 0">
						<el-row :gutter="20">
							<el-col class="grid-content" :span="4">
								<div>{{ siteValue.siteName }}
								</div>
							</el-col>
							<el-col class="grid-content" :span="10">
								<el-input v-model="siteValue.queryKeyWord" placeholder="请输入访问关键字" :prefix-icon="Search"
									clearable>
								</el-input>
							</el-col>
							<el-col class="grid-content" :span="10">
								<el-button :icon="Search" type="success" @click="handleLinkAccess(siteValue, index)" />
							</el-col>
						</el-row>
					</template>
				</li>
			</ul>
		</el-tab-pane>
	</el-tabs>
</template>
<script setup>
import { ref, reactive, watch } from "vue";
import { Search } from "@element-plus/icons-vue";
import CommonTopHeader from "../components/CommonTopHeader.vue";
// --------暴露数据----------------
const queryKey = ref('');
const activeName = ref(true);
const siteList = {
	// ------------搜索引擎----------------
	// github
	github: {
		siteName: "Github",
		baseUrl: "https://github.com/search?q=",
		queryKeyWord: "",
	},
	// google
	google: {
		siteName: "google",
		baseUrl: "https://www.google.com/search?q=",
		queryKeyWord: "",
	},
	// duckduckgo
	duckduckgo: {
		siteName: "duckduckgo",
		baseUrl: "https://duckduckgo.com/?q=",
		queryKeyWord: "",
	},
	// baidu
	baidu: {
		siteName: "baidu",
		baseUrl: "https://www.baidu.com/s?wd=",
		queryKeyWord: "",
	},
	// bing
	bing: {
		siteName: "duckduckbinggo",
		baseUrl: "https://www.bing.com/search?q=",
		queryKeyWord: "",
	},
	// fsoufsou
	fsoufsou: {
		siteName: "fsoufsou",
		baseUrl: "https://fsoufsou.com/search?q=",
		queryKeyWord: "",
	},
	// yandex
	yandex: {
		siteName: "yandex",
		baseUrl: "https://yandex.com/search/?text=",
		queryKeyWord: "",
	},
	// wikipedia
	wikipedia: {
		siteName: "wikipedia",
		baseUrl: "https://zh.wikipedia.org/w/index.php?go=%E5%89%8D%E5%BE%80&search=",
		queryKeyWord: "",
	},
	// bilibili
	bilibili: {
		siteName: "bilibili（哔哩哔哩）",
		baseUrl: "https://search.bilibili.com/all?keyword=",
		queryKeyWord: "",
	},
	// ------------程序开发----------------
	// stackoverflow
	stackoverflow: {
		siteName: "stackoverflow",
		baseUrl: "https://stackoverflow.com/search?q=",
		queryKeyWord: "",
	},
	juejin: {
		siteName: "掘金",
		baseUrl: "https://juejin.cn/search?query=",
		queryKeyWord: "",
	},
	segmentfault: {
		siteName: "segmentfault（思否）",
		baseUrl: "https://segmentfault.com/search?q=",
		queryKeyWord: "",
	},
	// ------------翻译----------------
	// youdao
	youdao: {
		siteName: "有道词典",
		baseUrl: "https://www.youdao.com/result?word=",
		queryKeyWord: "",
	},
	// fanyiBaidu
	fanyiBaidu: {
		siteName: "百度翻译",
		baseUrl: "https://fanyi.baidu.com/#en/cn/",
		queryKeyWord: "",
	},
}
const tabs = reactive({
	SearchEngine: [
		"搜索引擎",
		siteList.google,
		siteList.duckduckgo,
		siteList.baidu,
		siteList.bing,
		siteList.fsoufsou,
		siteList.yandex,
		siteList.wikipedia,
		siteList.github,
	],
	imageGallery: [
		"图片资源",
	],
	VideoSites: [
		"视频资源",
		siteList.bilibili,
	],
	MusicSites: [
		"音乐资源",
	],
	ProgramDevelopment: [
		"编程开发",
		siteList.stackoverflow,
		siteList.github,
		siteList.juejin,
		siteList.segmentfault,

	],
	Translation: [
		"在线翻译",
		siteList.youdao,
		siteList.fanyiBaidu,
	],
});

// --------暴露函数----------------
const handleLinkAccess = (siteValue, index) => {
	const fullURL = siteValue.baseUrl + siteValue.queryKeyWord;
	window.open(fullURL, '_blank');
};
watch(queryKey, (newValue) => {
	for (const tab in tabs) {
		tabs[tab].forEach((element, index) => {
			if (index > 0) {
				element.queryKeyWord = newValue;
			}
		});
	}
});
</script>
<style >
.searchTabs {
	font-family: Helvetica;
	font-size: 15px;
}

/* element plus 组件样式 */

.searchTabs .el-row {
	margin-bottom: 20px;
	left: 263px;
	align-items: center;
}

.title {
	justify-content: center;
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

ul {
	list-style-type: none;
}

ul li {
	margin-bottom: 20px;
}

.el-input-group {
	display: inline-flex;
	width: 80%;
	align-items: stretch;
}
</style>
