<template>
  <div class="flex justify-center items-start lg:items-center px-10 pt-20 sm:pt-36 mg:px-0 lg:pt-0 h-full m-auto min-h-screen">
    <div class="w-4/5 md:w-2/3 lg:w-1/2">
      <span class="text-5xl font-semibold">Oooops ...</span>
      <p class="text-2xl font-light mt-8 leading-relaxed">{{ $t("notFound.notice") }}</p>
      <a :href="goBackUrl()" class="block w-64 m-auto text-center mb-28 md:mb-0 mt-28 p-4 text-xl rounded-lg bg-olive-200 text-olive-500">
        {{ $t("notFound.goToWebsite") }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: "NotFound",
  setup() {
    const route = useRoute();

    const goBackUrl = () => {
      const forcedLang: string = route.params.lang.toString() || "";
      return `/${forcedLang}`;
    }

    return {
      goBackUrl
    }
  }
});
</script>

<style scoped lang="scss">
</style>
