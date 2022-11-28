<template>
  <v-card class="navbar-container">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      fixed
    >
      <div
        v-if="$auth.user"
        class="user-name-background"
        :style="{'background-image' :
          `linear-gradient(to bottom, transparent, #3167AF), url(${$config.baseURL}/storage/picture_admins/${$auth.user?.picture})` }"
      >
        <h2 class="user-name mb-5">
          {{ $auth.user?.name }}
        </h2>
        <v-btn
          elevation="2"
          class="menu-toggle-btn"
          color="yellow"
          fab
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
      <v-divider />
      <vuescroll
        :ops="ops"
        style="height: calc(100vh - 200px);"
      >
        <v-list
          dense
          class="pt-0"
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.route"
            router
            class="menu-link"
            nuxt
            link
          >
            <v-list-item-icon class="menu-link-icon">
              <v-icon small>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon class="menu-chevron-icon">
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </vuescroll>
    </v-navigation-drawer>

    <div class="fake-space-area" />
  </v-card>
</template>

<script>
import vuescroll from 'vuescroll'

export default {
  name: "LayoutNav",
  components: {
    vuescroll
  },
  data() {
    return {
      ops: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
          locking: true
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: true,
          scrollingY: true,
          speed: 300
        },
        rail: {
          background: '#01a99a',
          opacity: 0,
          size: '8px',
          specifyBorderRadius: false,
          gutterOfEnds: null,
          gutterOfSide: '2px',
          keepShow: false
        },
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          keepShow: false,
          background: '#c1c1c1',
          opacity: 1,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0,
          size: '8px',
          disable: false
        }
      },
      drawer: true,
      mini: false,
      items: [
        { title: 'Accuiel', icon: 'mdi-home-city-outline', route: '/' },
        { title: 'Bank', icon: 'mdi-bank', route: '/banks' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container{
  .v-navigation-drawer{
    background-color: white;
    min-height: 100vh;
    overflow: visible !important;
    ::v-deep .v-navigation-drawer__content {
      overflow: visible !important;
    }

    .user-name-background {
      min-height: 199px;
      position: relative;
      background-size: cover;
      background-position: center;
      .user-name{
        bottom: -10px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        color: white;
        width: max-content;

        padding: 15px 20px 10px 20px ;
        border-radius: 40px;
        font-size: 20px;
        transition: all 0.4s ease-in-out;
        .label{
          font-size: 10px;
          color: #e0e0e0;
          position: absolute;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          font-weight: 200;
        }
      }
    }

    .menu-link{
      min-height: 48px;
      border-bottom : 1px solid rgba(black, .1);
      .menu-link-icon{
        margin-right: 8px;
        i{
          background-color: $gray-light-1;
          border-radius: 50px;
          padding: 16px 8px;
          font-size: 1.2rem;
        }
      }
      .menu-chevron-icon{
        i{
          margin-top: 8px;
        }
      }
      &:hover {
         background-color: $gray-light-2;
        .menu-link-icon i{
          background-color: $gray-light-3;
        }
      }
    }
    .menu-toggle-btn{
      transform: translateX(28px);
      position: absolute;
      top: 32px;
      z-index: 2;
      right: 0px;
    }

    .v-list .v-list-item--active {
      color: map-get($blue, "base") ;
      .menu-link-icon i{
        color: map-get($blue, "base");
        background-color: $gray-light-3 ;
      }
    }
    .v-list-item--link:before {
      background-color: blue;
      font-weight: bold;
      font-size: 23px;
    }

    .title_items{
      color: white;
      margin-right: 8px;
      i{
        background-color: rgb(255 255 255 / .2);
        border-radius: 50px;
        padding: 8px;
      }
    }
    .primary--text .v-icon {
      color: white !important;
    }

    &.v-navigation-drawer--mini-variant{
      .menu-link {
        .menu-link-icon i{
          background-color:  $gray-light-1;
          border-radius: 50px;
          padding: 16px 8px;
          margin-left: -5px;
        }
      }
      .user-name{
        opacity: 0;
      }
      .menu-toggle-btn{
        transform: translateX(28px) rotate(180deg);
      }
      .v-list .v-list-item--active {
        .menu-link-icon i{
          background-color:transparent;
        }
      }
      .text_list{
        display: none;
      }
      .title_items i{
        background-color: transparent;
        border-radius: 0px;
        padding: 0px;
        margin-left: -5px;
      }
    }
  }

  .fake-space-area{
    width: 256px;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    will-change: width;
    transition-property: width;
  }
  .v-navigation-drawer--mini-variant ~ .fake-space-area{
    width: 56px;
  }
}
</style>
