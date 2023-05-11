const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: false,
  displaytitle: true,
  displaydescription: true,
  abouttext: "Buy Me a Coffee",
  aboutlink: "paypal",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "eulogo",
    link: "laso"
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Renfield - 2023",
      description: "In acest moment Vizionati",
      image: "https://img.goku.sx/xxrz/1200x600/576/df/8c/df8cc65d427b0db40cb7e193de234f38/df8cc65d427b0db40cb7e193de234f38.jpg",
      sources: [
        {
          file:
            "https://evif.onthecloudcdn.com/_v10/abe8730c018ce0ad5074c75cd7174bf7cf3534a436d473a80df2d864ba0c1c969810779f3c9ef555df9641c151ffd8be6ff049381d138db5cd96171881049cba2c251d6a73556d34cef3b94e0f87bab4fb824e24aedae7019df4c1cdc16503e0d3f17f4a5eae05f48adb62bbebe43e78e9c3f8eeac599dc2f191a498c1522358/1080/index.m3u8",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://evif.onthecloudcdn.com/_v10/abe8730c018ce0ad5074c75cd7174bf7cf3534a436d473a80df2d864ba0c1c969810779f3c9ef555df9641c151ffd8be6ff049381d138db5cd96171881049cba2c251d6a73556d34cef3b94e0f87bab4fb824e24aedae7019df4c1cdc16503e0d3f17f4a5eae05f48adb62bbebe43e78e9c3f8eeac599dc2f191a498c1522358/1080/index.m3u8",
          label: "720p"
        },
        {
          file:
            "https://evif.onthecloudcdn.com/_v10/abe8730c018ce0ad5074c75cd7174bf7cf3534a436d473a80df2d864ba0c1c969810779f3c9ef555df9641c151ffd8be6ff049381d138db5cd96171881049cba2c251d6a73556d34cef3b94e0f87bab4fb824e24aedae7019df4c1cdc16503e0d3f17f4a5eae05f48adb62bbebe43e78e9c3f8eeac599dc2f191a498c1522358/1080/index.m3u8",
          label: "480p"
        },
        {
          file:
            "https://evif.onthecloudcdn.com/_v10/abe8730c018ce0ad5074c75cd7174bf7cf3534a436d473a80df2d864ba0c1c969810779f3c9ef555df9641c151ffd8be6ff049381d138db5cd96171881049cba2c251d6a73556d34cef3b94e0f87bab4fb824e24aedae7019df4c1cdc16503e0d3f17f4a5eae05f48adb62bbebe43e78e9c3f8eeac599dc2f191a498c1522358/1080/index.m3u8",
          label: "360p"
        },
        {
          file:
            "https://evif.onthecloudcdn.com/_v10/abe8730c018ce0ad5074c75cd7174bf7cf3534a436d473a80df2d864ba0c1c969810779f3c9ef555df9641c151ffd8be6ff049381d138db5cd96171881049cba2c251d6a73556d34cef3b94e0f87bab4fb824e24aedae7019df4c1cdc16503e0d3f17f4a5eae05f48adb62bbebe43e78e9c3f8eeac599dc2f191a498c1522358/1080/index.m3u8",
          label: "240p"
        },
        {
          file:
            "https://evif.onthecloudcdn.com/_v10/abe8730c018ce0ad5074c75cd7174bf7cf3534a436d473a80df2d864ba0c1c969810779f3c9ef555df9641c151ffd8be6ff049381d138db5cd96171881049cba2c251d6a73556d34cef3b94e0f87bab4fb824e24aedae7019df4c1cdc16503e0d3f17f4a5eae05f48adb62bbebe43e78e9c3f8eeac599dc2f191a498c1522358/1080/index.m3u8",
          label: "160p"
        }
      ],
      captions: [
        {
          file:
            "https://raw.githubusercontent.com/fanetattoo/RO-REINFIELD/main/Subtitrare%20ro.srt",
          label: "ROMANA",
          kind: "captions"
        }

      ],
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  
});

playerInstance.on("ready", function () {


  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});