<template>
  <div
    class="w-full h-screen flex justify-center items-center xs:justify-start xs:items-start flex-col bg-gray-900 px-5 py-2 select-none"
  >
    <div class="flex flex-row items-center gap-4">
      <h1
        :class="{ 'opacity-0 -translate-y-6': !appear }"
        class="text-5xl xs:text-7xl md:text-8xl lg:text-9xl relative z-50 font-bold mix-blend-exclusion transform text-white transition duration-[2000ms] delay-[4000ms]"
      >TerminalApe</h1>
    </div>
    <div class="relative z-50 flex-col justify-center items-center">
      <h3
        :class="{ 'opacity-0 -translate-y-3': !appear }"
        class="text-base xs:text-lg md:text-2xl text-gray-300 text-center xs:text-left transform transition duration-[2000ms] delay-[5000ms]"
      >Hold your apes, this page is still being made.</h3>
    </div>
    <div
      ref="bg-wrap"
      id="bg-wrap"
      :class="{ 'opacity-0': !appear }"
      class="absolute top-0 bottom-0 left-0 right-0 w-screen h-screen min-h-screen overflow-hidden z-0 transition duration-[5000ms] delay-[250ms]"
    >
      <div
        class="relative w-full h-full transform transition-all border-gray-50 duration-[5000ms] delay-[1500ms] box-border"
        :class="{ 'scale-50 border-[2.5rem]': !appear, 'border-0 border-transparent': appear }"
      >
        <svg viewBox="0 0 100 100" class="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
              <animate attributeName="fx" dur="50s" values="0%;3%;0%" repeatCount="indefinite" />
              <stop offset="0%" stop-color="rgba(255, 0, 123, 1)" />
              <stop offset="100%" stop-color="rgba(255, 0, 123, 0)" />
            </radialGradient>
            <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
              <animate attributeName="fx" dur="39.5s" values="0%;3%;0%" repeatCount="indefinite" />
              <stop offset="0%" stop-color="rgba(255, 174, 0, 1)" />
              <stop offset="100%" stop-color="rgba(255, 174, 0, 0)" />
            </radialGradient>
            <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
              <animate attributeName="fx" dur="32.5s" values="0%;3%;0%" repeatCount="indefinite" />
              <stop offset="0%" stop-color="rgba(0, 136, 255, 1)" />
              <stop offset="100%" stop-color="rgba(0, 136, 255, 0)" />
            </radialGradient>
            <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
              <animate attributeName="fx" dur="39s" values="0%;5%;0%" repeatCount="indefinite" />
              <stop offset="0%" stop-color="rgba(0, 255, 0, 1)" />
              <stop offset="100%" stop-color="rgba(0, 255, 0, 0)" />
            </radialGradient>
            <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
              <animate attributeName="fx" dur="40.5s" values="0%;5%;0%" repeatCount="indefinite" />
              <stop offset="0%" stop-color="rgba(50,0,255, 1)" />
              <stop offset="100%" stop-color="rgba(50,0,255, 0)" />
            </radialGradient>
            <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
              <animate attributeName="fx" dur="51.5s" values="0%;5%;0%" repeatCount="indefinite" />
              <stop offset="0%" stop-color="rgba(255,0,0, 1)" />
              <stop offset="100%" stop-color="rgba(255,0,0, 0)" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
            <animate attributeName="x" dur="23s" values="0%;-25%;0%" repeatCount="indefinite" />
            <animate attributeName="y" dur="24s" values="25%;-25%;25%" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="18s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
            <animate attributeName="x" dur="25s" values="-25%;0%;-25%" repeatCount="indefinite" />
            <animate attributeName="y" dur="26s" values="0%;-25%;0%" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="19s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="13.744%"
            y="1.18473%"
            width="100%"
            height="100%"
            fill="url(#Gradient1)"
            transform="rotate(334.41 50 50)"
          >
            <animate attributeName="x" dur="30s" values="25%;0%;25%" repeatCount="indefinite" />
            <animate attributeName="y" dur="31.5s" values="0%;25%;0%" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="7s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="-2.17916%"
            y="35.4267%"
            width="100%"
            height="100%"
            fill="url(#Gradient2)"
            transform="rotate(255.072 50 50)"
          >
            <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite" />
            <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="12s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="9.00483%"
            y="14.5733%"
            width="100%"
            height="100%"
            fill="url(#Gradient3)"
            transform="rotate(139.903 50 50)"
          >
            <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite" />
            <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="9s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appear: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => this.appear = true, 100);
    });
  }
}
</script>

<style>
</style>