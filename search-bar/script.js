const users = [
  {
    name: "Aarav Mehta",
    pic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800",
    bio: "Frontend developer who enjoys building clean and interactive user interfaces."
  },
  {
    name: "Ananya Sharma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800",
    bio: "Creative designer with a love for minimal aesthetics and modern UI trends."
  },
  {
    name: "Rohan Verma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    bio: "JavaScript enthusiast focused on logic building and performance optimization."
  },
  {
    name: "Priya Singh",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
    bio: "UX-focused developer passionate about accessibility and user-centered design."
  },
  {
    name: "Kabir Malhotra",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800",
    bio: "Full-stack learner exploring APIs, databases, and scalable web apps."
  },
  {
    name: "Neha Kapoor",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    bio: "UI designer focused on clean layouts and intuitive user experiences."
  },
  {
    name: "Aditya Rao",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    bio: "Backend learner interested in APIs, authentication, and databases."
  },
  {
    name: "Sneha Iyer",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800",
    bio: "Product-minded developer who enjoys solving real-world problems."
  },
  {
    name: "Rahul Khanna",
    pic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800",
    bio: "Tech enthusiast exploring performance optimization and best practices."
  },
  {
    name: "Pooja Nair",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800",
    bio: "Creative thinker passionate about frontend animations and micro-interactions."
  }
];



function showUsers(arr) {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  arr.forEach(user => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.className = "bg-img";
    img.src = user.pic;

    const blur = document.createElement("div");
    blur.className = "blurred-layer";

    const content = document.createElement("div");
    content.className = "content";

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    content.append(h3, p);
    card.append(img, blur, content);
    cardsContainer.appendChild(card);
  });
}

/* 🔥 Run immediately on page load */
showUsers(users);

let inp=document.querySelector(".inp");
inp.addEventListener("input",function(){
let newusers=users.filter((user)=> {
return user.name.startsWith(inp.value);
});

showUsers(newusers);
});
