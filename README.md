# GoSocial
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GoSocial - Home</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="navbar">
    <div class="logo">GoSocial</div>
    <input type="text" id="searchInput" placeholder="Search videos...">
    <nav class="nav-buttons">
      <button onclick="location.href='index.html'">Home</button>
      <button onclick="location.href='upload.html'">Upload</button>
      <button onclick="location.href='live.html'">Go Live</button>
    </nav>
    <div class="user-icon">👤</div>
  </header>

  <main>
    <h2>Welcome to GoSocial</h2>
    <p>Share and explore videos, shorts, and live streams.</p>
  </main>

  <script src="js/script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Upload Video</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h2>Upload a Video</h2>
  <button onclick="location.href='editor.html'">Upload Saved Video</button>
  <button onclick="location.href='editor.html'">Create New Video</button>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Edit Video</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h2>Video Editor</h2>
  <p>Edit tools (mockup): trim, add text, effects, music.</p>
  <button onclick="location.href='details.html'">Done</button>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Video Details</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h2>Video Details</h2>
  <form onsubmit="handleDetailsSubmit(event)">
    <input type="text" placeholder="Video Name" required><br>
    <textarea placeholder="Description"></textarea><br>
    <input type="text" placeholder="Playlist"><br>
    <label><input type="checkbox" id="ageCheck"> 18+ Only</label><br>
    <input type="text" placeholder="Sound/Music"><br>
    <button type="submit">Done</button>
  </form>
  <script src="js/script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Uploading</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h2>Wait for 10 minutes for fully uploading...</h2>
  <p id="countdown">Loading: 30 seconds...</p>
  <script src="js/script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Go Live</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h2>Go Live</h2>
  <p>Start live streaming. (Mock setup)</p>
  <button onclick="alert('You are now live!')">Start Live</button>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Trending Videos - GoSocial</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="navbar">
    <div class="logo">GoSocial</div>
    <input type="text" id="searchInput" placeholder="Search videos...">
    <nav class="nav-buttons">
      <button onclick="location.href='index.html'">Home</button>
      <button onclick="location.href='trending.html'">Trending</button>
      <button onclick="location.href='upload.html'">Upload</button>
      <button onclick="location.href='live.html'">Go Live</button>
    </nav>
    <div class="user-icon">👤</div>
  </header>

  <main>
    <h2>🔥 Trending Videos</h2>
    <div class="video-list">
      <div class="video-item">
        <img src="https://via.placeholder.com/300x180" alt="Video Thumbnail">
        <h3>Amazing Drone Footage</h3>
        <p>1.2M views • 2 days ago</p>
      </div>
      <div class="video-item">
        <img src="https://via.placeholder.com/300x180" alt="Video Thumbnail">
        <h3>How to Cook Perfect Pasta</h3>
        <p>890K views • 1 week ago</p>
      </div>
      <div class="video-item">
        <img src="https://via.placeholder.com/300x180" alt="Video Thumbnail">
        <h3>Best Football Goals 2025</h3>
        <p>2.3M views • 3 days ago</p>
      </div>
    </div>
  </main>

  <script src="js/script.js"></script>
</body>
</html>

.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 20px;
}

.video-item {
  width: 300px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);
  text-align: left;
}

.video-item img {
  width: 100%;
  border-radius: 6px;
}

.video-item h3 {
  margin: 10px 0 5px;
  font-size: 18px;
}

.video-item p {
  font-size: 14px;
  color: #666;
}

 function handleDetailsSubmit(event) {
  event.preventDefault();
  const isAdult = document.getElementById('ageCheck').checked;
  localStorage.setItem("ageRestricted", isAdult ? "yes" : "no");
  window.location.href = "success.html";
}

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

// Handle fake search interaction
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        alert(`Searching for: ${searchInput.value}`);
        searchInput.value = "";
      }
    });
  }
});
