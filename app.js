// PUT YOUR CODE HERE

const timeline = gsap.timeline();

timeline
  .from(".box.red", {
    top: "-200px",
    left: "-200px",
    delay: 1,
  })
  .from(".box.green", {
    top: "-200px",
    right: "-200px",
    delay: 0.1,
  })
  .from(".box.blue", {
    bottom: "-200px",
    right: "-200px",
    delay: 0.1,
  })
  .from(".box.yellow", {
    bottom: "-200px",
    left: "-200px",
    delay: 0.1,
  })
  .to(".box.red", {
    x: "-100%",
    left: "100vw",
    backgroundColor: "green",
    borderRadius: "50%",
    duration: 1,
  })
  .to(
    ".box.green",
    {
      y: "-100%",
      top: "100vh",
      backgroundColor: "blue",
      borderRadius: "50%",
      duration: 1,
    },
    "<"
  )
  .to(
    ".box.blue",
    {
      x: "100vw",
      left: "-100%",
      bottom: "0",
      backgroundColor: "yellow",
      borderRadius: "50%",
      duration: 1,
    },
    "<"
  )
  .to(
    ".box.yellow",
    {
      y: "0",
      top: "0",
      backgroundColor: "red",
      borderRadius: "50%",
      duration: 1,
    },
    "<"
  )
  .to(".box.yellow", {
    x: "-200",
  })
  .to(
    ".box.red",
    {
      x: "200px",
    },
    "<"
  )
  .to(
    ".box.green",
    {
      x: "200",
    },
    "<"
  )
  .to(
    ".box.blue",
    {
      x: "-200px",
      left: "0px",
    },
    "<"
  );
