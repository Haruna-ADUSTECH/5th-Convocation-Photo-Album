body {
  margin: 0;
  padding: 0;
  background: #f2f2f2;
  font-family: sans-serif;
}

#flipbook {
  width: 90vw;
  height: 80vh;
  margin: 2rem auto;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

#flipbook .page {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#flipbook .page img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.controls {
  text-align: center;
  margin-bottom: 1rem;
}

.controls button {
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  font-size: 1rem;
  cursor: pointer;
  }
