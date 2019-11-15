<template>
  <div class="container text-center pt-5 mb-5">
    <button class="btn btn-primary mb-5" @click="show = !show">Toggle</button>

    <transition name="ma" :duration="{enter: 1500, leave: 2000}" appear>
      <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, sint!</p>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated pulse"
    >
      <p class="p-5" v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, sint!</p>
    </transition>

    <transition name="ma" mode="out-in">
      <div class="alert alert-success" v-if="show" key="success">success</div>
      <div class="alert alert-danger" v-else key="danger">danger</div>
    </transition>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="show">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, unde?</div>
    </transition>

    <button class="btn btn-success" @click="add">add</button>
    <button class="btn btn-danger" @click="remove">danger</button>

    <hr>
    <transition-group class="list-group" tag="ul" name="ma">
      <li class="list-group-item w300" v-for="item of items" :key="item">{{ item }}</li>
    </transition-group>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                items: [1, 2, 3, 4, 5],
                nextNum: 6,
            }
        },

        methods: {

            add() {
              this.items.splice(this.getIndex(), 0, this.nextNum++)
            },

            remove() {
              this.items.splice(this.getIndex(), 1);
            },

            getIndex() {
              return Math.floor(Math.random() * this.items.length)
            },

            beforeEnter(element) {
                console.log('beforeEnter')
            },
            enter(element, done) {
                console.log('enter')
                done()
            },
            afterEnter(element) {
                console.log('afterEnter')
            },
            enterCancelled(element) {
                console.log('enterCancelled')
            },

            beforeLeave(element) {
                console.log('beforeLeave')
            },
            leave(element, done) {
                console.log('leave')
                done()
            },
            afterLeave(element) {
                console.log('afterLeave')
            },
            leaveCancelled(element) {
                console.log('leaveCancelled')
            },
        }
    }
</script>
<style>
  @import '~animate.css';

  /*.ma-enter {
    opacity: 0;
  }

  .ma-enter-active {
    transition: opacity 1s;
  }

  .ma-enter-to {
  }

  .ma-leave {
  }

  .ma-leave-active {
    animation: 1s ma-slide forwards;
    transition: opacity 1s;
  }

  .ma-leave-to {
    opacity: 0;
  }

  @keyframes ma-slide {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-100px);
    }
  }*/

  .w300 {
    width: 300px;
    margin: 0 auto;
  }


  .ma-enter-active, .ma-leave-active {
    transition: 1s all;
  }

  .ma-enter, .ma-leave-to {
    transform: translateX(-100px);
  }
</style>
