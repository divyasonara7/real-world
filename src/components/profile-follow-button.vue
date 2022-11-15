<template>
  <button
    :class="[
      'btn btn-sm action-btn',
      following ? 'btn-secondary' : 'btn-outline-secondary',
    ]"
    :disabled="isLoading"
    @click="onFollowButtonClick"
  >
    <i :class="[following ? 'ion-minus-round' : 'ion-plus-round']"></i>
    {{ followButtonTitle }}
  </button>
</template>
<script lang="ts">
export default {
  name: "ProfileFollowButton",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
const following = ref(false);
const isLoading = ref(false);
const onFollowButtonClick = () => {
  console.log("onFollowButtonClick");
};

const followButtonTitle = () => {
  console.log("followButtonTitle");
};
</script>
<!-- <script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  
  import Profile from "@/store/modules/Profile";
  
  @Component
  export default class ProfileFollowButton extends Vue {
    @Prop({ required: true }) following!: boolean;
    @Prop({ required: true }) username!: string;
  
    isLoading = false;
  
    get followButtonTitle(): string {
      return this.following
        ? `Unfollow ${this.username}`
        : `Follow ${this.username}`;
    }
    async onFollowButtonClick(): Promise<void> {
      this.isLoading = true;
      try {
        this.following
          ? await Profile.unFollow(this.username)
          : await Profile.follow(this.username);
      } finally {
        this.isLoading = false;
      }
    }
  }
  </script> -->
