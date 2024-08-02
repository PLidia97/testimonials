const testimonials = [
  {
    author: {
      name: "Gabriel Moore",
      image: "./author-01.jpg",
    },
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis! Sapiente natus nesciunt beatae optio voluptatibus itaque eius reprehenderit similique, ex iusto deserunt tempore molestias ducimus qui eligendi, odio rem!",
    date: "Written on 23rd May",
  },

  {
    author: {
      name: "Billie Bailey",
      image: "./author-02.jpg",
    },
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis! Sapiente natus nesciunt beatae optio voluptatibus itaque eius reprehenderit similique, ex iusto deserunt tempore molestias ducimus qui eligendi, odio rem!",
    date: "Written on 26th May",
  },
  {
    author: {
      name: "Jackie Oliver",
      image: "./author-03.jpg",
    },
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis! Sapiente natus nesciunt beatae optio voluptatibus itaque eius reprehenderit similique, ex iusto deserunt tempore molestias ducimus qui eligendi, odio rem!",
    date: "Written on 2nd June",
  },
  {
    author: {
      name: "Pauline Carter",
      image: "./author-04.jpg",
    },
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, officiis! Sapiente natus nesciunt beatae optio voluptatibus itaque eius reprehenderit similique, ex iusto deserunt tempore molestias ducimus qui eligendi, odio rem!",
    date: "Written on 1st August",
  },
];

const containerEl = document.getElementById("testimonials-conatiner");

const makeTestimonialsCard = (testimonials) => {
  return `<div class="testimonials-card">
  <img src= "${testimonials.author.image}"/>
  <h2>${testimonials.author.name}</h2>
  <p>${testimonials.text}</p>
  <date>${testimonials.date}</date>
  </div>`;
};

let curentTestimonial = 0;

const nextTestimonial = () => {
  if (curentTestimonial < testimonials.length - 1) {
    curentTestimonial += 1;
    updatePage();
  }
};

const previousTestimonial = () => {
  if (curentTestimonial > 0) {
    curentTestimonial -= 1;
    updatePage();
  }
};

const updatePage = () => {
  let markup = makeTestimonialsCard(testimonials[curentTestimonial]);

  if (testimonials.length > 1) {
    markup += `<nav>
    <button onclick=previousTestimonial()>Previous</button>
    <button onclick=nextTestimonial()>Next</button>
    </nav>`;
  }
  containerEl.innerHTML = markup;
};

updatePage();
