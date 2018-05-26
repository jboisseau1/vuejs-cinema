function checkFilter(catagory, title, checked) {
  if (checked) {
    this[catagory].push(title);
  } else {
    let index = this[catagory].indexOf(title);
    if (index > -1) {
      this[catagory].splice(index, 1);
    }
  }
}

export { checkFilter };
