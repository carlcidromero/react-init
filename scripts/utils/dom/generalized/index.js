export const createWithClass =
  (tag) =>
  (...classNames) => {
    const e = document.createElement(tag);
    classNames.forEach((c) => e.classList.add(c));
    return e;
  };

export const appendTo = (parent) => (child) => {
  return parent.appendChild(child);
};
