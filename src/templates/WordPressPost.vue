<template>
  <Layout>
    <h1 v-html="$page.wordPressPost.title"></h1>
    <div v-html="$page.wordPressPost.fields.content"></div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) { wordPressPost (path: $path) { title fields {
  content } } }
</page-query>

<script>
export default {};
</script>
