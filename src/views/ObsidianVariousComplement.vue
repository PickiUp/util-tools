<template>
    <el-row class="title">
        <h1>obsidian various complement插件词典 生成器</h1>
    </el-row>
    <div>
        <!-- 头部工具栏 -->
        <el-header class="header-tool">
            <el-button type="danger">
                <Delete style="width: 1em; height: 1em; margin-right: 8px" />清除
            </el-button>
            <el-button type="success" @click="dialogVisible = true">
                <DataBoard style="width: 1em; height: 1em; margin-right: 8px"></DataBoard>示例
            </el-button>
            <el-dialog v-model="dialogVisible" title="Tips" width="30%" :before-close="handleClose">
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
                <DocumentCopy style="width: 1em; height: 1em; margin-right: 8px"></DocumentCopy>
                复制结果
            </el-button>
        </el-header>
    </div>
    <!-- 头部工具选项栏 -->
    <el-header class="header-setting">
        <div>
            <span>触发字符</span>
            <el-input placeholder="请输入 触发字符" size="small" clearable v-model="headerSettingValue.triggerText">
            </el-input>
        </div>
        <div>
            <span>写入文本</span>
            <el-input placeholder="请输入 写入文本" size="small" clearable v-model="headerSettingValue.writtenText">
            </el-input>
        </div>
        <div>
            <span>描述文本</span>
            <el-input placeholder="请输入 描述文本" size="small" clearable v-model="headerSettingValue.descText">
            </el-input>
        </div>
        <div>
            <span>触发字符列表</span>
            <el-input placeholder="请输入 触发字符列表（用分隔）" size="small" clearable v-model="headerSettingValue.triggerTextList">
            </el-input>
        </div>
        <div class="header-setting-item select-dropDown">
            <span>列分隔符</span>
            <el-select v-model="dividedSign" clearable placeholder="列分隔符">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
    </el-header>
    <ConvertArea />
</template>

<script setup>
import { ref, reactive } from "vue";

// ------------暴露数据--------------------
// 下拉选择器
const options = [
    {
        value: "    ",
        label: "TAB",
    },
    {
        value: ";",
        label: "分号 ;",
    },
    {
        value: "|",
        label: "管道符 | ",
    },
];
// ------------暴露函数--------------------
const headerSettingValue = reactive({
    triggerText: "",
    writtenText: "",
    descText: "",
    triggerTextList: "",
    dividedSign: '',
});

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

/**
 * 1. 获取设置栏参数
 * 2. 数据校验
 * 3. 拼接字符串
 */

const generateDict = function () {
    //  数据校验
    // ...........
    let dict = '';
    // 将triggerTextList 按  dividedSign 分割
    const triggerTextList = headerSettingValue.triggerTextList.join(dividedSign);
    dict = `${headerSettingValue.triggerText} => ${headerSettingValue.writtenText}${dividedSign}${headerSettingValue.descText} ${dividedSign} ${triggerTextList} ${dividedSign} `;
    return dict;
}

</script>


<style>
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
</style>