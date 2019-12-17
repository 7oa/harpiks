document.addEventListener("DOMContentLoaded", function() {
  //timeline start
  const tStart = new TimelineMax({ delay: 0.5 });
  const mainImg = document.querySelector(".main-img");
  const img = document.querySelector(".main-img img");
  tStart
    .fromTo(
      mainImg,
      1.2,
      { opacity: 0, x: "-100%", ease: Power2.easeInOut },
      { opacity: 1, x: 0 }
    )
    .from(img, 1.2, {
      opacity: 0,
      rotate: "-=36",
      scale: 0.6
    });

  //timeline Identity
  const tIdentity = new TimelineMax({ delay: 0.5 });
  const identitySections = document.querySelector(".identity");
  new Waypoint({
    element: identitySections,
    handler: function(direction) {
      const h2 = this.element.querySelector(".h2-title");
      const shadowTitle = this.element.querySelector(".shadow-title");
      const underline = this.element.querySelector(".h2-underline");
      if (direction === "down") {
        tIdentity
          .from(h2, 0.5, { x: "-50", opacity: 0 })
          .from(shadowTitle, 0.5, { y: "50", opacity: 0 })
          .from(underline, 0.5, { width: 0, ease: Power2.easeOut }, "-=0.5");
      }
    },
    offset: "100%"
  });

  const identitySteps = document.querySelector(".identity-steps");
  new Waypoint({
    element: identitySteps,
    handler: function(direction) {
      const identityStep = document.querySelectorAll(".identity-steps__step");
      if (direction === "down") {
        tIdentity
          .from(identityStep[0], 0.5, { x: "-100", opacity: 0 })
          .from(identityStep[1], 0.5, { x: "-100", opacity: 0 }, "-=0.2")
          .from(identityStep[2], 0.5, { x: "-100", opacity: 0 }, "-=0.2");
      }
    },
    offset: "100%"
  });

  const resources = document.querySelector(".resources");
  const hoursScoreDisplay = document.getElementById("js-hours");
  hoursScoreDisplay.innerHTML = 0;
  const variantsScoreDisplay = document.getElementById("js-variants");
  variantsScoreDisplay.innerHTML = 0;

  new Waypoint({
    element: resources,
    handler: function(direction) {
      //const t1 = new TimelineMax();
      const resourcesImg = document.querySelector(".resources__img");

      const hoursStartScore = { score: 0 };
      const hoursEndScore = 40;

      const variantsStartScore = { score: 0 };
      const variantsEndScore = 10;

      let resourcesImgWidth = "width: 100%";

      if (window.matchMedia("(min-width: 1024px)").matches) {
        resourcesImgWidth = "calc(100vw - 400px)";
      }
      if (window.matchMedia("(min-width: 1440px)").matches) {
        resourcesImgWidth = 1035;
      }
      if (direction === "down") {
        tIdentity
          .to(resourcesImg, 0.5, { width: resourcesImgWidth })
          .to(hoursStartScore, 1, {
            score: hoursEndScore,
            onUpdate: () =>
              (hoursScoreDisplay.innerHTML = hoursStartScore.score.toFixed())
          })
          .to(
            variantsStartScore,
            0.5,
            {
              score: variantsEndScore,
              onUpdate: () =>
                (variantsScoreDisplay.innerHTML = variantsStartScore.score.toFixed())
            },
            "-=0.5"
          );
      }
      this.destroy();
    },
    offset: "60%"
  });

  //timeline Process
  const tProcess1 = new TimelineMax({ delay: 0.5 });
  const processSections = document.querySelector(".process");
  new Waypoint({
    element: processSections,
    handler: function(direction) {
      const h2 = this.element.querySelector(".h2-title");
      const shadowTitle = this.element.querySelector(".shadow-title");
      const underline = this.element.querySelector(".h2-underline");
      if (direction === "down") {
        tProcess1
          .from(h2, 0.5, { x: "-50", opacity: 0 })
          .from(shadowTitle, 0.5, { y: "50", opacity: 0 })
          .from(underline, 0.5, { width: 0, ease: Power2.easeOut }, "-=0.5");
      }
    },
    offset: "100%"
  });

  const processStep1 = document.querySelector(".step1");
  new Waypoint({
    element: processStep1,
    handler: function(direction) {
      const title = this.element.querySelector(".process-step__title");
      const description = this.element.querySelector(
        ".process-step__description"
      );
      if (direction === "down") {
        tProcess1
          .from(title, 0.5, {
            x: -20,
            opacity: 0
          })
          .from(description, 0.5, { y: 20, opacity: 0 });
      }
    },
    offset: "100%"
  });

  const substeps = document.getElementsByClassName("substeps__item");
  for (let i = 0; i < substeps.length; i++) {
    new Waypoint({
      element: substeps[i],
      handler: function(direction) {
        const img = this.element.querySelector(".substeps__img");
        const underline = this.element.querySelector(".substeps__underline");
        const logo = this.element.querySelector(".substeps__logo");

        let moveFrom = "-100%";
        if (i % 2 === 0) moveFrom = "100%";
        if (direction === "down") {
          tProcess1
            .from(underline, 0.5, {
              width: 0,
              opacity: 0,
              ease: Power2.easeInOut
            })
            .from(img, 0.5, { x: moveFrom, opacity: 0 })
            .from(logo, 0.5, { scale: 0.5, opacity: 0 }, "-=0.5");
        }
      },
      offset: "100%"
    });
  }

  const tProcess2 = new TimelineMax({ delay: 0.5 });
  const processStep2 = document.querySelector(".step2");
  new Waypoint({
    element: processStep2,
    handler: function(direction) {
      const title = this.element.querySelector(".process-step__title");
      const logo = this.element.querySelector(".final-logo img");
      const description = this.element.querySelector(
        ".process-step__description"
      );
      if (direction === "down") {
        tProcess2
          .from(title, 0.5, {
            x: -20,
            opacity: 0
          })
          .from(description, 0.5, { y: 20, opacity: 0 })
          .from(logo, 0.5, { scale: 0.6, opacity: 0 });
      }
    },
    offset: "100%"
  });

  const stepComment = document.querySelector(".step-comment");
  new Waypoint({
    element: stepComment,
    handler: function(direction) {
      const t1 = new TimelineMax({ delay: 0.5 });
      if (direction === "down") {
        t1.from(this.element, 1, {
          y: 20,
          opacity: 0,
          ease: Power2.easeOut
        });
      }
    },
    offset: "100%"
  });

  //timeline Guideline
  const tGuideline = new TimelineMax({ delay: 0.5 });
  const guidelineSections = document.querySelector(".guideline");
  new Waypoint({
    element: guidelineSections,
    handler: function(direction) {
      const h2 = this.element.querySelector(".h2-title");
      const shadowTitle = this.element.querySelector(".shadow-title");
      const underline = this.element.querySelector(".h2-underline");
      const description = this.element.querySelector(".guideline__description");

      if (direction === "down") {
        tGuideline
          .from(h2, 0.5, { x: "-50", opacity: 0 })
          .from(shadowTitle, 0.5, { y: "50", opacity: 0 })
          .from(underline, 0.5, { width: 0, ease: Power2.easeOut }, "-=0.5")
          .from(description, 0.5, { y: 20, opacity: 0 });
      }
    },
    offset: "100%"
  });

  const guidelineSectionsImg = document.querySelector(".guideline__img img");
  const guidelineSectionsImgWrapper = document.querySelector(".guideline__img");

  new Waypoint({
    element: guidelineSectionsImgWrapper,
    handler: function(direction) {
      if (direction === "down") {
        tGuideline.from(guidelineSectionsImg, 0.5, {
          x: "100%",
          opacity: 0,
          scale: 0.6
        });
      }
    },
    offset: "100%"
  });
});
