const positions = { left: "5%", center: "36%", right: "70%" };

const newPosition = (orientation, pos) => {
  const currentPosition = Object.keys(positions).find(key => positions[key] === pos);
  let options = {};
  if (orientation === 'toLeft') {
    options["left"] = "left";
    options["center"] = "left";
    options["right"] = "center";
  } else {
    options["left"] = "center";
    options["center"] = "right";
    options["right"] = "right";
  }
  return options[currentPosition];
};

export {
  positions,
  newPosition
};