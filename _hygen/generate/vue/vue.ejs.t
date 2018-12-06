---
to: src/<%= dir %>/<% if(hierarchy){ -%><%= hierarchyName %>/<% } -%><%= name %>.vue
---
<template>
  <% if(dir === 'pages'){ -%>
  <Layout>
    <div class="<%= name %>"></div>
  </Layout>
  <% } -%>
  <% if(dir !== 'pages'){ -%>
  <div class="<%= name %>"></div>
  <% } -%>
</template>

<script>
export default {}
</script>

<style scoped lang='scss'>
  .<%= name %> {}
</style>