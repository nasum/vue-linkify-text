<template>
  <div>
    <h1>VueLinkifyText</h1>
    <LinkifyText :text="text" />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    text() {
      return "hogehogehoge https://example.com\nhttps://example.com\nhttps://example.com https://example.com";
    }
  }
};
</script>
