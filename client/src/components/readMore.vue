<template>
    <div id='read'>
    <section class="py-9">
      <div class="container read">
        <div class="row" style="color: #f0f2f5">
          <div class="col-lg-6 my-auto">
            <h3>Read More About Us</h3>
            <p class="pe-5">Pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
            <a href="javascript:;" class="text-primary icon-move-right">More about us
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
          <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
            <div class="p-3 info-horizontal">
              <div class="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i class="fas fa-ship opacity-10"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0">It becomes harder for us to give others a hand. <br> We get our heart broken by people we love.</p>
              </div>
            </div>

            <div class="p-3 info-horizontal">
              <div class="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i class="fas fa-handshake opacity-10"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0">As we live, our hearts turn colder. <br>Cause pain is what we go through as we become older.</p>
              </div>
            </div>
            <div class="p-3 info-horizontal">
              <div class="icon icon-shape  bg-gradient-primary shadow-primary text-center">
                <i class="fas fa-hourglass opacity-10"></i>
              </div>
              <div class="description ps-3">
                <p class="mb-0">When we lose family over time. <br> What else could rust the heart more over time? Blackgold.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  id: '#read'
}
</script>
<style scoped>
.read{
  animation: read 1.25s;
  animation-direction: alternate;
}
@keyframes read {
  0%   {opacity: 0%;}
  100%  {opacity: 100%;}
}
</style>
