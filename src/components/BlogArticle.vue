<template>
	<transition
		name="BlogArticle"
		mode="out-in"
	>
		<div class="BlogArticle">
			<article
				class="BlogArticle-Contents"
			>
				<g-link
					:to="article.path"
					class="BlogArticle-ContentsWrapLink"
				>
					<div class="BlogArticle-Head">
						<template v-if="article.featuredMedia">
							<g-image
								class="BlogArticle-Img"
								:src="article.featuredMedia.url"
								width="390"
							/>	
						</template>
						<template v-else>
							<g-image
								class="BlogArticle-Img"
								src="http://placehold.jp/1000x600.png"
								width="390"
							/>	
						</template>
						
						<font-awesome-icon
							:icon="{ prefix: 'fab', iconName: 'readme' }"
							size="3x"
						/>
					</div>
		
		
					<div class="BlogArticle-Body">
						<component
							:is="headingTag"
							class="BlogArticle-Heading"
						>
							{{ sliceText(article.title,25) }}
						</component>
						<div
							class="BlogArticle-Excerpt"
							v-html="sliceText(article.excerpt,70)"
						>
						</div>
					</div>
					<div class="BlogArticle-Foot">
						<div class="BlogArticle-Date">
							<font-awesome-icon
								:icon="{ prefix: 'fa', iconName: 'clock' }"
							/>
							<time class="BlogArticle-DateText">
								{{ article.date }}
							</time>
						</div>
						<div class="BlogArticle-Category">
							<g-link :to="article.categories[0].path">
								<font-awesome-icon
									:icon="{ prefix: 'fa', iconName: 'folder' }"
								/>
								<p class="BlogArticle-CategoryText">
									{{ article.categories[0].title }}
								</p>
							</g-link>
						</div>
					</div>
				</g-link>
			</article>
		</div>
	</transition>
</template>

<script>
import ArticleCategory from "@/basics/ArticleCategory.vue";
export default {
  components: {
    ArticleCategory
  },
  props: {
    headingTag: {
      type: String,
      requirer: true
    },
    article: {
      type: Object,
      requirer: true
    }
  },
  data() {
    return {
      isHover: false
    };
  },
  methods: {
    sliceText(text, end) {
      return text.slice(0, end);
    }
  }
};
</script>

<style scoped lang='scss'>
@import "@/styles/utility/transition-BlogArticle.scss";
.BlogArticle {
  &-Contents {
    height: 100%;
    background-color: $color-blog-article;
    border-radius: 5px;
    box-shadow: $box-shadow-default;
    transition: $tst-default;
    &:hover {
      box-shadow: $box-shadow-default-hover;
      transform: translateY(-5px);
      .BlogArticle-Head {
        &::after {
          background-color: transparentize($color-primary, 0.3);
        }
        .fa-readme {
          opacity: 1;
          transform: translateY(-10px);
        }
      }
    }
  }
  &-ContentsWrapLink {
    position: relative;
    height: 100%;
  }
  &-Head {
    position: relative;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      transition: $tst-default;
    }

    .fa-readme {
      position: absolute;
      top: calc(16px + 10px);
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      margin: auto;
      color: #fff;
      color: lighten($color-accent, 40%);
      opacity: 0;
      transition: $tst-default;
    }
  }
  &-Img {
    height: 200px;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  &-Body {
    padding-bottom: 20px;
    border-radius: 0 0 5px 5px;
  }
  &-Heading {
    padding: 8px;
    font-size: 1.3rem;
  }
  &-Excerpt {
    position: relative;
    height: 100px;
    padding: 8px 8px 40px;
    overflow: hidden;
    border-top: 1px solid #5e5e5e;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";

      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        $color-blog-article 75%,
        $color-blog-article 100%
      );
      border-radius: 0 0 5px 5px;
    }
  }
  &-Foot {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  &-DateText {
    margin-left: 5px;
  }
  &-Category {
    a {
      transition: $tst-default;

      &:hover {
        color: $color-accent;
      }
    }
  }
  &-CategoryText {
    display: inline-block;
    margin-left: 5px;
  }
}
</style>
