<!--公众号热门推荐板块-->
<template>
  <el-container class="container">

    <!--顶部标题+小标题-->
    <el-header>
      <el-row justify="center">
        <h2>近期公众号热门</h2>
      </el-row>
      <el-row justify="center">
        <p>点击标题阅读原文，或点击这里扫码关注我们</p>
      </el-row>
    </el-header>

    <!--主体板块-->
    <el-main>
      <el-row justify="center">

        <!--板块种类区分-->
        <el-tabs stretch class="article-tab">
          <!--具体种类所属的板块-->
          <el-tab-pane class="article-tab-pane" label="全部">
            <el-row justify="center">
              <el-col :span="8">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
              <el-col :span="8">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
              <el-col :span="8">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
            </el-row>
            <el-row justify="center">
              <el-col :span="12">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
              <el-col :span="12">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
            </el-row>

          </el-tab-pane>

          <el-tab-pane class="article-tab-pane" label="活动回顾">
            <el-row justify="center">
              <el-col :span="8">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
              <el-col :span="8">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
              <el-col :span="8">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
            </el-row>
            <el-row justify="center">
              <el-col :span="24">
                <article-tab :title="title" :type="type" :img_src="img_src"/>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane class="article-tab-pane" label="求职信息">全部</el-tab-pane>
          <el-tab-pane label="推广">全部</el-tab-pane>
          <el-tab-pane label="新生必读">全部</el-tab-pane>
          <el-tab-pane label="政策解读">全部</el-tab-pane>
          <el-tab-pane label="学校信息更新">全部</el-tab-pane>
          <el-tab-pane label="大使馆信息发表">全部</el-tab-pane>
          <el-tab-pane label="活动推文">全部</el-tab-pane>
          <el-tab-pane label="学术干货">全部</el-tab-pane>
          <el-tab-pane label="友情转发">全部</el-tab-pane>
          <el-tab-pane label="独家赞助">全部</el-tab-pane>
          <el-tab-pane label="其他">全部</el-tab-pane>
        </el-tabs>
      </el-row>
    </el-main>
  </el-container>

</template>

<script setup>
import ArticleTab from "../components/article-tab.vue";
import {getAssetsFile} from "../utils/getAssetsFile";

const title = $ref("新生教程｜新生体检&疫苗&TB Test超详细攻略")
const type = $ref("新生必读")
const img_src = $ref(getAssetsFile('logo.png'))

console.log(img_src)
</script>

<script>
export default {
  name: "HomeArticles"
}
</script>

<style scoped lang="less">

  .container {
    background-color: white;
    padding-top: 2vw;
    padding-bottom: 2vw;
    overflow: visible;
  }

  h2{
    font-size: 1.261vw;
  }

  p {
    font-size: 0.841vw;
  }

  :deep(.el-header) {
    height: 10vw;
  }

  .article-tab {
    width: 68vw;
  }

  .article-tab-pane {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0.5vw;
  }

  :deep(.el-tabs__active-bar) {
    background-color: darkred;
  }

  :deep(.el-tabs__item:hover) {
    color: darkred;
  }

  :deep(.el-tabs__item.is-active) {
    color: darkred;
  }
</style>