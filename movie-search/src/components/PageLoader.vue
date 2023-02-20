<template>
  <div class="fixed top-2/4 m-auto shadow-white left-0 right-0 w-1/4 z-10 text-center">
    <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="text-blue text-xl">
        Loading
    </div>
  </div>
</template>

<script>
export default {
    name:'PageLoader',
    props:{
        text:{
            required:false,
            default:'Loading',
            type:String
        }
    }
}
</script>

<style scoped>
.lds-grid {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-grid div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  

</style>