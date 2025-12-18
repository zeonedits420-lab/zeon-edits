@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Poppins:wght@400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: radial-gradient(circle at center, #080808, #000);
  color: #fff;
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(10px);
  z-index: 100;
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: cyan;
  text-shadow: 0 0 10px cyan, 0 0 20px cyan;
}

.logo span {
  color: magenta;
  text-shadow: 0 0 10px magenta, 0 0 20px magenta;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-left: 25px;
  font-weight: 500;
  transition: 0.3s;
}

nav a:hover, nav a.active {
  color: cyan;
  text-shadow: 0 0 10px cyan;
}

/* Hero Section */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding-top: 80px;
}

.hero h2 {
  font-size: 3.5rem;
  text-shadow: 0 0 20px magenta, 0 0 40px cyan;
  animation: glow 3s infinite alternate;
}

.hero p {
  margin-top: 15px;
  color: #ccc;
  letter-spacing: 1px;
}

.btn {
  display: inline-block;
  margin-top: 30px;
  padding: 12px 30px;
  border: 2px solid cyan;
  border-radius: 50px;
  color: cyan;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
  text-transform: uppercase;
}

.btn:hover {
  background: cyan;
  color: #000;
  box-shadow: 0 0 20px cyan, 0 0 40px cyan;
}

/* Glow Animation */
@keyframes glow {
  from { text-shadow: 0 0 20px magenta, 0 0 40px cyan; }
  to { text-shadow: 0 0 30px cyan, 0 0 60px magenta; }
}

/* Floating bubbles */
.neon-bg::before, .neon-bg::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.3), transparent);
  animation: float 8s infinite ease-in-out alternate;
}

.neon-bg::after {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,0,255,0.2), transparent);
  animation-delay: 4s;
}

@keyframes float {
  from { transform: translate(-50%, -50%) scale(1); }
  to { transform: translate(-45%, -55%) scale(1.2); }
}
