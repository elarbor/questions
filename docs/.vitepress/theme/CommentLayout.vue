<!-- Layout.vue -->
<template>
  <Layout>
    <template #doc-after>
      <Giscus
        id="comments"
        repo="elarber/questions"
        repoid="R_kgDOMJ_OGw"
        category="Announcements"
        categoryid="DIC_kwDOMJ_OG84CgHg6"
        mapping="title"
        term="Welcome to giscus!"
        reactionsenabled="1"
        emitmetadata="0"
        inputposition="top"
        theme="light"
        lang="en"
        loading="lazy"
      ></Giscus>
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import Giscus from '@giscus/vue';
const { Layout } = DefaultTheme;
</script>
