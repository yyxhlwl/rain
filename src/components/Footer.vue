<template>
  <div class="footer">
    <div class="content">
      <div class="logo_wrapper">
        <svg t="1688802443210" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="894" width="64" height="64"><path d="M508 672H244c-90.4 0-164-73.6-164-164s73.6-164 164-164h264c90.4 0 164 73.6 164 164s-73.6 164-164 164z" fill="#C3D2FB" p-id="895"></path><path d="M692.8 672H498.4C352 672 232 552 232 405.6v-51.2C232 208 352 88 498.4 88 660 88 792 220 792 381.6v191.2c0 54.4-44.8 99.2-99.2 99.2z" fill="#7094F3" p-id="896"></path><path d="M488 444a228 228 0 1 0 456 0 228 228 0 1 0-456 0z" fill="#386BF3" p-id="897"></path><path d="M464 752h96v144h-96z" fill="#3D4265" p-id="898"></path></svg>
        <div class="tel">合院共享雨伞</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="css">
.content{
  margin: 0 auto;
  display: flex;
  width: 12rem;
  height: 1.8rem;
  padding-top: .56rem;
}
.footer{
  min-width: 12rem;
  height: 5.8rem;
}
.logo_wrapper{
  margin:0 auto;
  color: #666;
  font-weight: 700;
  font-size: .14rem;
  line-height: 1;
}
.tel{
  margin-bottom: .1rem;
  font-size: .14rem;
  font-weight: 300;
  color: #666;
  line-height: .2rem;
}
</style>