// api key  from TMDB

const api = "api_key=0d7fcb538472b4a248392fdaf9ae8532";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300"; // You can change "w185" to your preferred size


// requests for movies data

const requests = {

  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};
// used to truncate the string

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())



  .then((data) => {
    
    // every refresh the movie will be change


    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];

   

    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner__title");
    var banner__desc = document.getElementById("banner__description");


    banner.style.backgroundImage =
      "url(" + banner_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setMovie.overview, 150);
    banner_title.innerText = setMovie.name;
  });

// movies rows
fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);


    const title = document.createElement("h2");


    title.className = "row__title";
    title.innerText = "NETFLIX ORIGINALS";


    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);



    data.results.forEach((movie) => {

      const poster = document.createElement("img");
      poster.className = "row__posterLarge";

      var s = movie.name.replace(/\s+/g, "");

      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

//trending

// top rated
fetch(requests.fetchTrending)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Top Rated";
    row.appendChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie) => {
      
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s2 = movie.id;

      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

// action
fetch(requests.fetchActionMovies)
  .then((res) => res.json())


  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    
    data.results.forEach((movie) => {
    
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// comedy
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);


    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);


    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// Horror
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// Romance
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });
// documentry
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())

  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";

    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Documentaries"
    ;
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });


fetch('https://team-website-br8m.onrender.com/api/auth/trailers')
    .then(res => res.json())
    .then(data => {
        data.forEach(trailer => {
            console.log(`Title: ${trailer.title}, URL: ${trailer.trailerUrl}`);
        });
    });

// Toggle Login Form Visibility
const loginBtn = document.getElementById('login-btn');
const loginFormContainer = document.getElementById('login-form-container');

loginBtn.addEventListener('click', () => {
    loginFormContainer.classList.toggle('hidden');
});




// Fetch and Display Trailers
async function fetchTrailers() {
    try {
        const response = await fetch('https://team-website-br8m.onrender.com/api/auth/trailers');
        const trailers = await response.json();

        const trailerContainer = document.getElementById('trailer-section');
        trailers.forEach((trailer) => {
            const trailerDiv = document.createElement('div');
            trailerDiv.classList.add('trailer');
            trailerDiv.innerHTML = `
                <h3>${trailer.title}</h3>
                <video src="${trailer.trailerUrl}" controls></video>
                <p>${trailer.description}</p>
            `;
            trailerContainer.appendChild(trailerDiv);
        });
    } catch (error) {
        console.error('Error fetching trailers:', error);
    }
}

// Call fetchTrailers when the page loads
window.onload = fetchTrailers;

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('https://team-website-br8m.onrender.com/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
          alert(data.message);
          localStorage.setItem('token', data.token);
          window.location.href = 'index (3).html';
      } else if (response.status === 404) {
          alert(data.message); // "User not found. Redirecting to signup."
          showSignupForm(email, password); // Redirect to signup form
      } else {
          alert(data.message);
      }
  } catch (error) {
      console.error('Login Error:', error);
      alert('An error occurred during login.');
  }
});

function showSignupForm(email = '', password = '') {
  const signupFormContainer = document.getElementById('signup-form-container');
  signupFormContainer.classList.remove('hidden');

  document.getElementById('signup-email').value = email;
  document.getElementById('signup-password').value = password;

  document.getElementById('signup-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const signupEmail = document.getElementById('signup-email').value;
      const signupPassword = document.getElementById('signup-password').value;

      try {
          const response = await fetch('https://team-website-br8m.onrender.com/api/auth/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: signupEmail, password: signupPassword }),
          });

          const data = await response.json();

          if (response.ok) {
              alert(data.message); // "User registered successfully"
              signupFormContainer.classList.add('hidden'); // Hide signup form
          } else {
              alert(data.message);
          }
      } catch (error) {
          console.error('Signup Error:', error);
          alert('An error occurred during signup.');
      }
  });
}

// Close Login Form
const closeLoginBtn = document.getElementById('close-login');

loginBtn.addEventListener('click', () => {
    loginFormContainer.classList.remove('hidden');
});

closeLoginBtn.addEventListener('click', () => {
    loginFormContainer.classList.add('hidden');
});

// Close Form When Clicking Outside
window.addEventListener('click', (e) => {
    if (e.target === loginFormContainer) {
        loginFormContainer.classList.add('hidden');
    }
});

// Close Signup Form
const signupFormContainer = document.getElementById('signup-form-container');
const closeSignupBtn = document.getElementById('close-signup');

closeSignupBtn.addEventListener('click', () => {
    signupFormContainer.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === signupFormContainer) {
        signupFormContainer.classList.add('hidden');
    }
});

// Language Selection
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (e) => {
    const language = e.target.value;
    if (language === 'es') {
        alert('¡Idioma cambiado a Español! (Spanish selected)');
        // Further translations can be added here.
    } else {
        alert('Language changed to English');
    }
});
