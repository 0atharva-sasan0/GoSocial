const videoData = [
    {
      title: "GoSocial Launch Trailer",
      creator: "Admin",
      views: "1.2M views",
      thumbnail: "https://via.placeholder.com/400x200?text=GoSocial+Video+1"
    },
    {
      title: "React Tutorial for Beginners",
      creator: "CodeMaster",
      views: "982K views",
      thumbnail: "https://via.placeholder.com/400x200?text=React+Tutorial"
    },
    {
      title: "Top 10 JavaScript Tips",
      creator: "DevGuru",
      views: "456K views",
      thumbnail: "https://via.placeholder.com/400x200?text=JS+Tips"
    }
  ];
  
  const videoSection = document.getElementById("videoSection");
  
  videoData.forEach(video => {
    const card = document.createElement("div");
    card.classList.add("video-card");
    card.innerHTML = `
      <img class="video-thumb" src="${video.thumbnail}" alt="${video.title}">
      <div class="video-info">
        <h4>${video.title}</h4>
        <p>${video.creator} • ${video.views}</p>
      </div>
    `;
    videoSection.appendChild(card);
  });
  
function handleDetailsSubmit(e) {
    e.preventDefault();
    const isAdult = document.getElementById('ageCheck').checked;
    localStorage.setItem("ageRestricted", isAdult ? "yes" : "no");
    location.href = "success.html";
  }
  
  // Simulate a countdown for 30 seconds
  if (document.getElementById('countdown')) {
    let seconds = 30;
    const countdownEl = document.getElementById('countdown');
    const interval = setInterval(() => {
      seconds--;
      countdownEl.textContent = `Loading: ${seconds} seconds...`;
      if (seconds <= 0) {
        clearInterval(interval);
        countdownEl.textContent = "Upload started. Video will be public in 10 minutes!";
      }
    }, 1000);
  }
  