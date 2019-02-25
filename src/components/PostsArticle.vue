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
					<div class="PostsArticle-WrapHeadBody">
						<div class="PostsArticle-Head">
							<template v-if="article.eyecatch">
								<g-image
									:src="article.eyecatch.file.url"
									class="PostsArticle-Img"
									width="100%"
								/>	
							</template>
							<template v-else>
								<g-image  
									class="PostsArticle-Img"
									src="@/assets/images/default-thumbnail.png"
								/>	
							</template>

						
							<FontAwesomeIcon
								:icon="{ prefix: 'fab', iconName: 'readme' }"
								size="3x"
							/>
						</div>
		
		
						<div class="PostsArticle-Body">
							<h2 class="PostsArticle-Heading">
								{{ article.title }}
							</h2>
							<PostsArticleTag
								:node="article.tags"
								class="PostsArticle-Tags"
							/>
						</div>
					</div>
					<div class="PostsArticle-Foot">
						<PostsArticleDate
							:text="article.date"
							:time="article.date"
						/>
						<PostsArticleCategory
							:text="article.category.title"
						/>
					</div>
				</g-link>
			</article>
		</div>
	</Transition>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

import PostsArticleDate from "@/components/PostsArticleDate.vue";
import PostsArticleCategory from "@/components/PostsArticleCategory.vue";
import PostsArticleTag from "@/components/PostsArticleTag.vue";

export default {
  components: {
    PostsArticleDate,
    PostsArticleCategory,
    PostsArticleTag,
    FontAwesomeIcon
  },
  props: {
    article: {
      type: Object,
      requirer: true,
      default: () => {}
    }
  },
  created() {
    library.add(faReadme);
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    @include mq-xs {
      height: 50vw;
    }
  }

  &-Body {
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
  &-Foot {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    margin-top: 8px;
    font-size: 0.7rem;
  }
}
</style>
