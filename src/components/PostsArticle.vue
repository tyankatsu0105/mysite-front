<template>
	<transition
		name="PostsArticle"
		mode="out-in"
	>
		<div class="PostsArticle">
			<article
				class="PostsArticle-Contents"
			>
				<g-link
					:to="article.path"
					class="PostsArticle-ContentsWrapLink"
				>
					<div class="PostsArticle-Head">
						<!-- @todo mediaがfileで取得できるようになったら変更する -->
						<!-- <template v-if="article.featuredMedia">
							<g-image
								class="PostsArticle-Img"
								:src="article.featuredMedia.url"
								width="100%"
							/>	
						</template> -->
						<!-- <template v-else> -->
						<g-image  
							class="PostsArticle-Img"
							src="@/assets/images/default-thumbnail.png"
						/>	
						<!-- </template> -->

						
						<font-awesome-icon
							:icon="{ prefix: 'fab', iconName: 'readme' }"
							size="3x"
						/>
					</div>
		
		
					<div class="PostsArticle-Body">
						<component
							:is="headingTag"
							class="PostsArticle-Heading"
						>
							{{ article.title }}
						</component>

						<PostsArticleTag
							:node="article.tags"
							class="PostsArticle-Tags"
						/>
						

						<!-- eslint-disable vue/no-v-html -->
						<vue-markdown
							class="PostsArticle-Excerpt"
							:source="sliceText(article.contents,0,120)"
						/>
						<!--eslint-enable-->
					</div>
					<div class="PostsArticle-Foot">
						<posts-article-date
							:text="article.date"
							:time="article.date"
						/>
						<posts-article-category
							:text="article.categories[0].title"
						/>
					</div>
				</g-link>
			</article>
		</div>
	</transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReadme } from "@fortawesome/free-brands-svg-icons";
import VueMarkdown from "vue-markdown";

import PostsArticleDate from "@/components/PostsArticleDate.vue";
import PostsArticleCategory from "@/components/PostsArticleCategory.vue";
import PostsArticleTag from "@/components/PostsArticleTag.vue";

import sliceText from "@/util/sliceText.js";
export default {
  components: {
    PostsArticleDate,
    PostsArticleCategory,
    PostsArticleTag,
    FontAwesomeIcon,
    VueMarkdown
  },
  props: {
    headingTag: {
      type: String,
      requirer: true,
      default: "h2"
    },
    article: {
      type: Object,
      requirer: true,
      default: () => {}
    }
  },
  created() {
    library.add(faReadme);
  },

  methods: {
    sliceText
  }
};
</script>

<style scoped lang='scss'>
@import "@/styles/utility/transition-PostsArticle.scss";
.PostsArticle {
  width: 100%;
  &-Contents {
    height: 100%;
    background-color: $color-posts-article;
    border-radius: 5px;
    box-shadow: $box-shadow-default;
    transition: $tst-default;
    &:hover {
      box-shadow: $box-shadow-default-hover;
      transform: translateY(-5px);
      .PostsArticle-Head {
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
    font-weight: bold;
  }
  &-Tags {
    padding: 8px;
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
        $color-posts-article 75%,
        $color-posts-article 100%
      );
      border-radius: 0 0 5px 5px;
    }
  }
  &-Foot {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    font-size: 0.7rem;
  }
}
</style>
