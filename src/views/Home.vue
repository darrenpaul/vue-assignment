<template>
  <div>
    <Tabs :slotName="activeTab">
      <template v-slot:tab-buttons>
        <button
          :class="['p-2', 'w-20', getActiveColor(tab.id)]"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="() => changeTabs(tab.id)"
        >
          {{ tab.name }}
        </button>
      </template>

      <template v-slot:signin>
        <SignInForm />
      </template>

      <template v-slot:signup>
        <SignUpForm />
      </template>

      <template v-slot:apis>
        <Apis />
      </template>
    </Tabs>
  </div>
</template>

<script>
// components
import Tabs from "@/components/Tabs.vue";
import SignInForm from "@/components/SignInForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import Apis from "@/components/Apis.vue";

export default {
  components: { Tabs, SignInForm, SignUpForm, Apis },

  data() {
    return {
      activeTab: "signup",
      tabs: [
        { name: "Sign Up", id: "signup" },
        { name: "Sign In", id: "signin" },
        { name: "Apis", id: "apis" },
      ],
    };
  },

  methods: {
    changeTabs(tab) {
      this.activeTab = tab;
    },

    getActiveColor(tab) {
      if (this.activeTab === tab) {
        return "bg-blue-300";
      }
      return "bg-gray-200";
    },
  },
};
</script>
