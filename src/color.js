export default {
  bind(el, bindings, vnode) {
    //console.log('bind')
    const fontModifier = bindings.modifiers['font'];
    if (fontModifier) {
      el.style.fontSize = '30px';
    }

    let delay = 0;
    if (bindings.modifiers['delay']) {
     delay = 2000;
    }

    setTimeout(() => {
      const arg = bindings.arg;
      el.style[arg] = bindings.value;
    }, delay)
  },

  /*inserted(el, bindings, vnode) {
    console.log('inserted')
  },
  update(el, bindings, vnode, oldVnode) {
    console.log('update')
  },

  componentUpdated(el, bindings, vnode, oldVnode) {
    console.log('componentUpdated')
  },

  unbind(el, bindings) {
    console.log('unbind');
  }*/
}
