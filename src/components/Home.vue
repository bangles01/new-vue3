<template>
  <div class="home flex flex-col items-center justify-center h-screen">
    <img :src="logo" alt="Vue Logo" class="mb-4 w-16 h-16" />
    <i18n-t keypath="home.welcome" tag="h1" class="mt-2 mb-4 text-xl">
      <template v-slot:name>
        <strong>{{ $t("home.name") }}</strong>
      </template>
    </i18n-t>
  </div>
</template>

<script lang="ts">

import { Ref, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import logo from "@/assets/vue.svg";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const route = useRoute();
    const lang: Ref<string> = ref(route.params.lang || 'fr') as Ref<string>;

    const router = useRouter();
    const switchLang = (newLang: string) => {
      lang.value = newLang;
      router.push(`/${newLang}`);
    };

    return {
      lang,
      switchLang,
      logo
    };
  }
});
</script>

<style lang="scss">
</style>
