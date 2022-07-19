<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img src="https://www.niyogin.com/_ipx/_/logo1.svg" alt="" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'SendEmail' }">Send Email</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'SendSms' }">Send Sms</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'SendReports' }">Send Reports</router-link>
        </li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'SendEmail' }">Send Email</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'SendSms' }">Send Sms</router-link>
          </li>
           <li>
          <router-link class="link" :to="{ name: 'SendReports' }">Send Reports</router-link>
        </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      scrollPosition: null,
      mobile: false,
      windowWidth: null,
      mobileNav: null,

    }
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    // this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY > 50 ? true : false;
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);

  width: 100%;
  position: sticky;
  transition: 0.5s ease all;
  color: #fff;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width:1140px) {
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li {
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;

    }

    .link {
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        color: #00afea;
        border-color: #00afea;

      }
    }

    .branding {
      display: flex;
      align-items: center;

      img {
       width: 128px;
      height: 68px;
        transition: .5s ease all;
      }
    }

    .icon {
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      right: 24px;
      height: 100%;

      i {
        cursor: pointer;
        font-size: 24px;
        transition: .8s ease all;
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
    }

    .dropdown-nav {
      flex-direction: column;
      display: flex;
      position: fixed;
      width: 100%;
      max-width: 250px;
      height: 100%;
      background-color: white;
      top: 0;
      left: 0;

      li {
        margin-left: 0;

        .link {
          color: black;

        }
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active
    {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
      transform: translateX(-250px);
    }

    .mobile-nav-enter-to{
      transform: translateX(0);
    }
  }

}

.scrolled-nav {
  background-color: black;

  .branding {
    img {
      width: 128px;
      height: 68px;
    }
  }
}
</style>
