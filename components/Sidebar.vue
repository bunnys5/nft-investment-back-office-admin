<template>
  <div class="div-block-6" id="div-block-6">
    <div class="div-block-8">
      <div class="close-icon" id="close-icon">
        <img
          class="img-close"
          src="../assets/sidebar/close.svg"
          alt=""
          sizes="50px"
        />
      </div>
      <div class="div-block-9">
        <img
          src="../assets/sidebar-navbar-dashboard/6457cdde93a9b2235ddae9e7_Screenshot 2023-05-07 231145.jpg"
          loading="lazy"
          sizes="50px"
          alt=""
          class="image-6"
        />
      </div>
      <div class="text-block-12">CYBER<span class="text-span-5">PAY</span></div>
      <div class="div-block-11"><div class="div-block-10"></div></div>
      <div class="div-block-15">
        <div class="div-block-16">
          <img
            src="../assets/sidebar-navbar-dashboard/645a06bc33be2c52e0f51299_chartsquare.svg"
            loading="lazy"
            alt=""
            class="image-8"
          /><a href="../pages/dashboard" class="link">Dashboard</a
          ><img
            src="../assets/sidebar-navbar-dashboard/645a0c25aebb03a1063120a0_Rectangle 111.svg"
            loading="lazy"
            alt=""
            class="image-10"
          />
        </div>

        <div class="div-block-18">
          <div class="div-block-25">
            <img
              src="../assets/sidebar-navbar-dashboard/645a1127aebb0313fd3166d4_Vectoru.svg"
              loading="lazy"
              alt=""
              class="image-13"
            />
          </div>
          <div class="div-block-26">
            <a href="../pages/users" class="link-3">Users</a>
          </div>
        </div>
        <div class="div-block-18-copy">
          <div class="div-block-25-copy">
            <img
              src="../assets/sidebar-navbar-dashboard/645a16a87702f12120425c65_Vector.svg"
              loading="lazy"
              alt=""
              class="image-17"
            />
          </div>
          <div class="div-block-26-copy">
            <a href="../pages/orders" class="link-3-copy">Order</a>
          </div>
        </div>
        <div class="div-block-18-copy-copy">
          <div class="div-block-25-copy-copy">
            <img
              src="../assets/sidebar-navbar-dashboard/645a1cc2e9042e743894a702_Group 1261152691.svg"
              loading="lazy"
              alt=""
              class="image-18"
            />
          </div>
          <div class="div-block-26-copy-copy">
            <a href="~/pages/admin/dividend" class="link-3-copy-copy">Dividend</a>
          </div>
        </div>
        <div class="div-block-18-copy-copy-copy">
          <div class="div-block-25-copy-copy-copy">
            <img
              src="../assets/sidebar-navbar-dashboard/645a1dd361394174af092d2a_Vector.svg"
              loading="lazy"
              alt=""
              class="image-19"
            />
          </div>
          <div class="div-block-26-copy-copy-copy">
            <a href="../pages/devices" class="link-3-copy-copy-copy-copy">Devices</a>
          </div>
        </div>
        <div class="div-block-18-copy-copy-copy">
          <div class="div-block-25-copy-copy-copy">
            <img
              src="../assets/sidebar-navbar-dashboard/645a1e7249c0961222b90fbd_Vector (1).svg"
              loading="lazy"
              alt=""
              class="image-20"
            />
          </div>
          <div class="div-block-26-copy-copy-copy">
            <a href="../pages/pools" class="link-3-copy-copy-copy">Pools</a>
          </div>
        </div>
        <div class="div-block-18-copy-copy-copy-copy">
          <div class="div-block-25-copy-copy-copy">
            <img
              src="../assets/sidebar-navbar-dashboard/645a1f4182a2fe4a6945f2d4_profile2user.svg"
              loading="lazy"
              alt=""
              class="image-21"
            />
          </div>
          <div class="div-block-26-copy-copy-copy">
            <a href="../pages/partners" class="link-3-copy-copy-copy-copy">Partners</a>
          </div>
        </div>
        <div class="div-block-18-copy-copy-copy-copy">
          <div class="div-block-25-copy-copy-copy">
            <img
              src="../assets/sidebar-navbar-dashboard/6458b98c5f4e30a6c1bda778_logout.png"
              loading="lazy"
              alt=""
              class="image-21"
            />
          </div>
          <div class="div-block-26-copy-copy-copy">
            <a href="#" class="link-3-copy-copy-copy-copy">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    await this.pressMenu();
  },
  methods: {
    async pressMenu() {
      let sidebar = document.getElementById("div-block-6");
      let menuBtn = document.getElementById("close-icon");
      menuBtn.onclick = function () {
        sidebar.classList.add("sidebar-close");
        console.log(sidebar);
      };
    },
  },
};



</script>

<style scoped>
@import url("../styles/sidebar.css");

.div-block-6 {
  position: fixed;
  top: 0;
  padding: 0;
  margin: 0;
  left: 0;
}

</style>
