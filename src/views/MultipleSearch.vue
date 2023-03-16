<template>
	<CommonTopHeader />

	<el-tabs v-model="activeName" type="border-card" class="searchTabs">
		<el-tab-pane :label="key" v-for="(value, key, index) in tabs" :key="index">
			<ul>
				<li>
					<div v-if="index === 0" class="site-name">输入关键字：</div>
					<el-input v-if="index === 0" v-model="queryKey">
					</el-input>
				</li>
				<li v-for="(siteValue, siteName, index) in value" :key="index">

					<div class="site-name">{{ siteName }}</div>
					<el-input v-model="siteValue.queryKeyWord" placeholder="请输入访问关键字">
						<template #prepend> {{ siteValue.baseUrl }}</template>
					</el-input>
					<el-button :icon="Search" type="success" @click="handleLinkAccess(siteValue, index)" />
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
const siteList = {
	// github
	github: {
		baseUrl: "https://github.com/search?q=",
		queryKeyWord: "",
	},
}
const tabs = reactive({
	SearchEngine: {
		google: {
			baseUrl: "https://www.google.com/search?q=",
			queryKeyWord: "",
		},
		duckduckgo: {
			baseUrl: "https://duckduckgo.com/?q=",
			queryKeyWord: "",
		},
		baidu: {
			baseUrl: "https://www.baidu.com/s?wd=",
			queryKeyWord: "",
		},
		bing: {
			baseUrl: "https://www.bing.com/search?q=",
			queryKeyWord: "",
		},
		fsoufsou: {
			baseUrl: "https://fsoufsou.com/search?q=",
			queryKeyWord: "",
		},
		github: {
			baseUrl: "https://github.com/search?q=",
			queryKeyWord: "",
		},
		yandex: {
			baseUrl: "https://yandex.com/search/?text=",
			queryKeyWord: "",
		},
		wikipedia: {
			baseUrl: "https://zh.wikipedia.org/w/index.php?go=%E5%89%8D%E5%BE%80&search=",
			queryKeyWord: "",
		},
	},
	imageGallery: {
	},
	VideoSites: {
		github: {
			baseUrl: "https://search.bilibili.com/all?keyword=",
			queryKeyWord: "",
		},
	},
	MusicSites: {
	},
	DevCommunity: {

		stackoverflow: {
			baseUrl: "https://stackoverflow.com/search?q=",
			queryKeyWord: "",
		},
	},
});

// --------暴露函数----------------
const handleLinkAccess = (siteValue, index) => {
	const fullURL = siteValue.baseUrl + siteValue.queryKeyWord;
	window.open(fullURL, '_blank');
};
watch(queryKey, (newValue) => {
	for (const tab in tabs) {
		for (const t in tabs[tab]) {
			tabs[tab][t].queryKeyWord = newValue;
		}
	}
});
</script>
<style >
.searchTabs {
	font-family: Helvetica;
	font-size: 15px;
}

.searchTabs ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.searchTabs .site-name {
	display: inline-block;
	padding-bottom: 40px;
	min-width: 9%;
}

.searchTabs ul li {
	width: 100%;
}

.searchTabs ul li:first-child div[class='el-input'] {
	width: 80%;
	margin-right: 30px;
	padding-bottom: 30px;
	margin-top: 31px;
}

.searchTabs .el-input>div.el-input-group__prepend {
	min-width: 20%;
	justify-content: left;
}

ul {
	list-style-type: none;
}

.el-input-group {
	display: inline-flex;
	width: 80%;
	align-items: stretch;
}
</style>
