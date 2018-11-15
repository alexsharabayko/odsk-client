export const getComponentHTML = (ComponentClass: any, propsData: {[k: string]: any}): string => {
  const instance = new ComponentClass({propsData});

  instance.$mount();

  const html = instance.$el.outerHTML;

  instance.$destroy();

  return html;
};
