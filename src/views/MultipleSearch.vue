<template>
	<CommonTopHeader />
	<el-row class="title">
		<h1>你就不能搜索一下吗?</h1>
	</el-row>
	<el-tabs v-model="activeName" type="border-card" class="searchTabs">
		<el-tab-pane :name="value[0]" :label="value[0]" v-for="(value, key, index) in tabs" :key="index">
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
							<el-col class="grid-content seachItem" :span="4">
								<img :src="siteValue.icon" :alt="siteValue.desc" />
								<span :title="siteValue.desc">{{ siteValue.siteName }}</span>
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
const activeName = ref('搜索引擎');
const siteList = {
	// --------AI 搜索--------
	// phind
	phind: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2b1b2f37a9386433cae95ab0ccb8e7281.png',
		siteName: "phind (AI搜索)",
		baseUrl: "https://www.phind.com/search?q=",
		queryKeyWord: "",
		desc: '一个专门为程序员开发的搜索引擎'
	},
	// youCom
	youCom: {
		icon: 'https://cdn.you.com/img/shared/logos/ydc-logo-lightdarkmode.svg',
		siteName: "you.com (AI搜索)",
		baseUrl: "https://you.com/search?q=",
		queryKeyWord: "",
		desc: '📃号称「世界上第一个开放式搜索引擎」'
	},
	// consensus
	consensus: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v28e801724032645d296fc1b2a2e2e3e2e.png',
		siteName: "consensus (AI搜索)",
		baseUrl: "https://consensus.app/results/?q=",
		queryKeyWord: "",
		desc: '一个基于 AI，能在科学论文中为你找到答案的搜索引擎'
	},
	// consensus
	perplexity: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2a78e89eb502d4d4e9be27932bf5ff900.png',
		siteName: "perplexity (AI搜索)",
		baseUrl: "https://www.perplexity.ai/search?q=",
		queryKeyWord: "",
		desc: '号称全球第一个可以聊天的AI搜索引擎'
	},
	// iask
	iask: {
		icon: 'https://img1.imgtp.com/2023/05/10/GoidroBV.png',
		siteName: "iask",
		baseUrl: "https://iask.ai/?mode=question&q=",
		queryKeyWord: "",
		desc: 'The Free AI search engine utilizes similar technologies to ChatGPT, but in addition to it harnessing a highly optimized natural language processing (NLP) model, iAsk AI also …'
	},

	// ------------搜索引擎----------------
	// github
	github: {
		icon: 'https://icons.veryicon.com/png/256/miscellaneous/eva-icon-fill/github-41.png',
		siteName: "Github",
		baseUrl: "https://github.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	// google
	google: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2e96cf87e54f046ec870930b3c54fbf04.png',
		siteName: "google",
		baseUrl: "https://www.google.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	// duckduckgo
	duckduckgo: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2b666141fa7ec4a3799a227ec0a6cf72d.png',
		siteName: "duckduckgo",
		baseUrl: "https://duckduckgo.com/?q=",
		queryKeyWord: "",
		desc: ''
	},
	// baidu
	baidu: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2bb555dd32c6446f38d166d8c89f7206c.png',
		siteName: "baidu",
		baseUrl: "https://www.baidu.com/s?wd=",
		queryKeyWord: "",
		desc: ''
	},
	// bing
	bing: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v25467b56e2d6f4f01ad36fc251b34523e.png',
		siteName: "bing",
		baseUrl: "https://www.bing.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	// fsoufsou
	fsoufsou: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v21ebdee086c5f4b7ea76384e1198349be.png',
		siteName: "fsoufsou",
		baseUrl: "https://fsoufsou.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	// yandex
	yandex: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v27dc2e56b403d4130a13523129295f8e5.png',
		siteName: "yandex",
		baseUrl: "https://yandex.com/search/?text=",
		queryKeyWord: "",
		desc: ''
	},
	// wikipedia
	wikipedia: {
		icon: 'https://icons.veryicon.com/128/Internet%20%26%20Web/Simple%201/wikipedia.png',
		siteName: "wikipedia",
		baseUrl: "https://zh.wikipedia.org/w/index.php?go=%E5%89%8D%E5%BE%80&search=",
		queryKeyWord: "",
		desc: ''
	},
	// quora
	quora: {
		icon: 'https://icons.veryicon.com/128/Internet%20%26%20Web/Simple%201/wikipedia.png',
		siteName: "quora",
		baseUrl: "https://www.quora.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	// --------视频资源--------
	// youtube
	youtube: {
		icon: 'https://icons.veryicon.com/png/256/brands/brand-1/youtube-145.png',
		siteName: "youtube",
		baseUrl: "https://www.youtube.com/results?search_query=",
		queryKeyWord: "",
		desc: ''
	},
	// bilibili
	bilibili: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2108360248b8e4e5a8434675619fe2d3b.png',
		siteName: "bilibili（哔哩哔哩）",
		baseUrl: "https://search.bilibili.com/all?keyword=",
		queryKeyWord: "",
		desc: ''
	},
	// douyin
	douyin: {
		icon: 'https://img1.imgtp.com/2023/05/10/VDUampNa.png',
		siteName: "douyin（抖音）",
		baseUrl: "https://www.douyin.com/search/",
		queryKeyWord: "",
		desc: ''
	},

	// --------Icon图标--------
	// veryicon
	veryicon: {
		icon: 'https://www.veryicon.com/images/logo.svg',
		siteName: "veryicon",
		baseUrl: "https://www.veryicon.com/search/",
		queryKeyWord: "",
		desc: ''
	},
	// iconfinder
	iconfinder: {
		icon: 'https://img1.imgtp.com/2023/05/10/01g0okVB.png',
		siteName: "iconfinder",
		baseUrl: "https://www.iconfinder.com/search?q=",
		queryKeyWord: "",
		desc: 'Download 38 intro icons. Available in PNG and SVG formats. Ready to be used in web design, mobile apps and presentations. Download 38 intro icons. Available in …'
	},
	// ------------编程开发----------------
	// stackoverflow
	stackoverflow: {
		icon: 'https://icons.veryicon.com/png/256/brands/brand-1/stackoverflow-7.png',
		siteName: "stackoverflow",
		baseUrl: "https://stackoverflow.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	// stackexchange
	stackexchange: {
		icon: 'https://icons.veryicon.com/png/256/brands/popular-brand-icon-simple-icons/stackexchange-2.png',
		siteName: "stackexchange",
		baseUrl: "https://webapps.stackexchange.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	// MDN
	MDN: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v23b23b5cc713d4e26851b8fb2bb4fbc31.png',
		siteName: "MDN",
		baseUrl: "https://developer.mozilla.org/zh-CN/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	juejin: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v29898bad3c35e4266bb44496ee5903f17.png',
		siteName: "juejin (掘金)",
		baseUrl: "https://juejin.cn/search?query=",
		queryKeyWord: "",
		desc: ''
	},
	segmentfault: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v26bc7cdb420b24d748b01032e869df509.png',
		siteName: "segmentfault（思否）",
		baseUrl: "https://segmentfault.com/search?q=",
		queryKeyWord: "",
		desc: ''
	},
	zhihu: {
		icon: 'https://icons.veryicon.com/png/o/internet--web/color-social-media-icon/zhihu.png',
		siteName: "zhihu（知乎）",
		baseUrl: "https://www.zhihu.com/search?type=content&q=",
		queryKeyWord: "",
		desc: '知乎是一家中国大陆的社会化问答网站，创立于2011年1月26日，产品形态与美国在线问答网站Quora类似。“知乎”在文言文中意为“知道吗”。'
	},
	answers: {
		icon: 'https://img1.imgtp.com/2023/05/10/V5XOrSR4.png',
		siteName: "answers",
		baseUrl: "https://www.answers.com/search?q=",
		queryKeyWord: "",
		desc: 'Answers.com曾用名WikiAnswers ，是一个互联网知识交流平台。'
	},

	cnblog: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v246fa4365b37747c787b4eb6b10f96c52.png',
		siteName: "博客园",
		baseUrl: "https://zzk.cnblogs.com/my/s/blogpost-p?Keywords=",
		queryKeyWord: "",
		desc: ''
	},
	goobe: {
		icon: 'http://sousuo.org.cn/images/google.ico',
		siteName: "goobe",
		baseUrl: "https://goobe.io/search.aspx?k=",
		queryKeyWord: "",
		desc: ''
	},
	// ------------翻译----------------
	// youdao
	youdao: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2858d0a0bf58645449bce63beb218a7b0.png',
		siteName: "有道词典",
		baseUrl: "https://www.youdao.com/result?word=",
		queryKeyWord: "",
		desc: ''

	},
	// fanyiBaidu
	fanyiBaidu: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v27814f710ca714ee18c67eb01b9e16e7b.png',
		siteName: "百度翻译",
		baseUrl: "https://fanyi.baidu.com/#en/cn/",
		queryKeyWord: "",
		desc: ''

	},
	// volcengine
	volcengine: {
		icon: 'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2b38deef4abd643a59e993728481460aa.png',
		siteName: "火山翻译（字节）",
		baseUrl: "https://translate.volcengine.com/?category=&home_language=zh&source_language=detect&target_language=zh&text=",
		queryKeyWord: "",
		desc: ''

	},
	// -----------------图片资源-----------------
	// unsplash
	unsplash: {
		icon: 'https://s2.loli.net/2023/05/10/cWrNwGOvA2VEn45.png',
		siteName: "unsplash",
		baseUrl: "https://unsplash.com/s/photos/",
		queryKeyWord: "",
		desc: 'Unsplash是一个免费的照片共享网站。摄影师可以将照片上传到Unsplash，照片编辑者们会对用户上传的照片进行整理。'

	},
	// pexels
	pexels: {
		icon: 'https://img1.imgtp.com/2023/05/10/g0IRc7VA.png',
		siteName: "pexels",
		baseUrl: "https://www.pexels.com/zh-cn/search/",
		queryKeyWord: "",
		desc: '免费库存照片和视频，您可以在任何地方使用。浏览数百万高质量的免版税库存图片和免版权图片。无需归属。'

	},
	// pixabay
	pixabay: {
		icon: 'https://img1.imgtp.com/2023/05/10/Ds0Yk9aI.png',
		siteName: "pixabay",
		baseUrl: "https://pixabay.com/images/search/",
		queryKeyWord: "",
		desc: 'Pixabay.com是一个照片、插图、矢量图形、电影片段和音乐分享网站。该网站上的图片涵盖的主体较多，但品质被一些评论认为较为平庸。'

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
		siteList.zhihu,
		siteList.quora,
	],
	AskAndAnswer: [
		"提问回答",
		siteList.stackoverflow,
		siteList.stackexchange,
		siteList.quora,
		siteList.zhihu,
		siteList.segmentfault,
	],
	AISearch: [
		"AI搜索",
		siteList.phind,
		siteList.youCom,
		siteList.consensus,
		siteList.perplexity,
		siteList.iask,

	],
	ProgramDevelopment: [
		"编程开发",
		siteList.stackoverflow,
		siteList.stackexchange,
		siteList.MDN,
		siteList.github,
		siteList.juejin,
		siteList.segmentfault,
		siteList.zhihu,
		siteList.cnblog,
		siteList.goobe,
	],
	imageGallery: [
		"图片资源",
		siteList.unsplash,
		siteList.pexels,
		siteList.pixabay,
	],
	IconHub: [
		"图标素材",
		siteList.veryicon,
		siteList.iconfinder,
	],
	VideoSites: [
		"视频资源",
		siteList.bilibili,
		siteList.youtube,
		siteList.douyin,
	],
	MusicSites: [
		"音乐资源",
	],
	Translation: [
		"在线翻译",
		siteList.youdao,
		siteList.fanyiBaidu,
		siteList.volcengine,
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
	font-family: sans-serif;
	font-weight: bold;
	font-size: 15px;
}

/* element plus 组件样式 */

.searchTabs .el-row {
	margin-bottom: 20px;
	left: 263px;
	align-items: center;
}

.seachItem {
	display: flex !important;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.seachItem img {
	width: 32px;
	height: 32px;
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
