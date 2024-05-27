<template>
  <section class="video_player">
    <div class="modal_thumblai" @click="showModalVideo">
      <div class="play">
        <svg
          width="300"
          height="300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8066_144051)">
            <path
              d="M7 4V20L20 12L7 4Z"
              stroke="#0000008e"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_8066_144051">
              <rect width="300" height="300" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div class="modal_video" v-show="displayModalVideo">
      <div class="bg_modal" @click="showModalVideo"></div>
      <div class="container_modal">
        <CldVideoPlayer
          width="1920"
          height="1080"
          src="agroaurora/video_certificaciones"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const displayModalVideo = ref(false);

const showModalVideo = () => {
  displayModalVideo.value = !displayModalVideo.value;
};
</script>

<style scoped lang="scss">
.modal_video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  .bg_modal {
    width: 100%;
    height: 100%;
    background-color: #000000c5;
    backdrop-filter: blur(10px);
  }
  .container_modal {
    position: absolute;
    width: 70%;
  }
}
.modal_thumblai {
  width: 100%;
  height: 750px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331064/agroaurora/img_agroaurora_38_i43tgz.jpg");
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #0000008e;
    opacity: 1;
    position: absolute;
    z-index: -1;
  }
}

.play {
  background-color: #00000049;
  border-radius: 50%;
}
</style>
