<template>
	<Layout>
		<div class="WordPressPost">
			<transition
				appear
				name="WordPressPost-EyecatchBox"
			>
				<div class="WordPressPost-EyecatchBox">
					<g-image
						v-if="$page.post.featuredMedia"
						class="WordPressPost-Eyecatch"
						:src="$page.post.featuredMedia.url.src"
						width="100%"
					/>	
				</div>
			</transition>
		
			<h1 class="WordPressPost-Heading">
				{{ $page.post.title }}
			</h1>
			
			<div
				class="WordPressPost-Contents"
				v-html="$page.post.content"
			></div>
		</div>
	</Layout>
</template>

<page-query>
query Post($path: String!) {
  post: wordPressPost(path: $path) {
    title
    content
    featuredMedia {
      url
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/utility/transition-WordPressPost-EyecatchBox.scss";
@import "@/styles/thirdparty/prism.scss";
.WordPressPost {
  &-EyecatchBox {
    position: relative;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: linear-gradient(
          to bottom,
          $color-primary 0%,
          transparentize($color-primary, 1) 50%,
          $color-primary 100%
        ),
        linear-gradient(
          to right,
          $color-primary 0%,
          transparentize($color-primary, 1) 50%,
          $color-primary 100%
        );
    }
  }
  &-Eyecatch {
    object-fit: cover;
    height: 450px;
  }
  &-Heading {
    font-size: 2.2rem;
    font-weight: bold;
  }
  &-Contents {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 2px solid #5e5e5e;
    // ==============================================
    // Base
    // ==============================================
    > * {
      margin-top: 10px;
      line-height: 1.8;
    }
    a,
    cite {
      display: inline-block;
    }
    a {
      color: lighten($color-accent, 30%);
      text-decoration: underline;

      &:hover {
        transform: scale(1.1);
      }
    }
    // ==============================================
    // headings
    // ==============================================
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 20px;
      font-weight: bold;
    }
    h2 {
      padding-bottom: 3px;
      font-size: 2rem;
      border-bottom: 3px solid lighten($color-accent, 20%);
    }
    h3 {
      padding-left: 10px;
      font-size: 1.6rem;
      border-left: 5px solid lighten($color-accent, 20%);
    }
    h4 {
      font-size: 1.4rem;
    }
    h5 {
      font-size: 1.2rem;
    }
    h6 {
      font-size: 1.1rem;
    }
    // ==============================================
    // list
    // ==============================================
    ul,
    ol {
      list-style-type: disc;
    }
    ul {
      list-style-position: inside;
    }
    ol {
      list-style-position: inside;
    }
    // ==============================================
    // table
    // ==============================================
    table {
      border-collapse: collapse;
    }
    th,
    td {
      padding: 4px 8px;
      border: 1px solid #ccc;
    }
    th {
      font-weight: bold;
    }
    tr:nth-child(even) {
      background-color: darken(#ccc, 50%);
    }
    // ==============================================
    // blockquote
    // ==============================================
    blockquote {
      padding: 12px;
      font-size: 0.9rem;
      line-height: 1.4;
      background-color: #3a424e;
      border-radius: 5px;
    }
    // ==============================================
    // hr
    // ==============================================
    hr {
      margin: 32px 0;
    }
  }
}
</style>
