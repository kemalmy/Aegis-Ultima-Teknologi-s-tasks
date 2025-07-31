const modal = document.getElementById("myModal");
const modalText = document.getElementById("modalText");
const playBtn = document.getElementById("playBtn");
const helpBtn = document.getElementById("helpBtn");
const closeModal = document.getElementsByClassName("close")[0];

playBtn.addEventListener("click", () => {
  modalText.innerHTML = "To be added";
  modal.style.display = "block";
});

helpBtn.addEventListener("click", () => {
  modalText.innerHTML = "To be added";
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
  const whatsappUrl = "https://wa.me/6282115183845";
  window.open(whatsappUrl, "_blank");
});

const myFacebook = document.getElementById("my-facebook");

myFacebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/KemalMaulanaY/", "_blank");
});

// Mengubah isi konten dari modal my-activity
const myActivity = document.getElementById("my-activity");
myActivity.addEventListener("click", () => {
  //dibawah ini merupakan kode HTML untuk merubah isi konten my-activity
  const htmlContent = `
    <h2>My Organizational Activity</h2>
    <br/>
    <img src="images/Nnm_12.png" width="200px" />
    <p>Nihon no Matsuri 12 is an event organizer based in Telkom University that aims to introduce japanese culture to its students and citizens of Indonesia, the event is held annually. I worked here as a staff in the logistics division, on the internal subdivision, to be exact. My jobdesk entails making permits for the EO to do their events in various places as well as making sure all the items needed to support the event are available and in good shape.</p>
    <br/>
    <img src="images/hmtt.png" width="100px" />
    <p>Himpunan Mahasiswa Teknik Telekomunikasi is a student union that was founded by students that are currently enrolled in the telecomumunication major, as part of the union, i participate in their orientation program as well as joining one of their study group . 
    </p>
    <br/>
    <img src="images/utp.png" width="200px" />
    <p>UTP is arguably Malaysia's number one private university, which is backed by their state-owned oil company, Petronas. My experience there was participating in one of their internation symposium where i presentate my group's volunteer project invention that was made in the Engineering Service Community program in TelU.</p>
    <br/>    
  `;
  modalText.innerHTML = htmlContent;
  modal.style.display = "block";
});

// Mengubah isi konten dari modal my-volunteer
const myVolunteer = document.getElementById("my-volunteer");
myVolunteer.addEventListener("click", () => {
  //dibawah ini merupakan kode HTML untuk merubah isi konten
  const htmlContent = `
    <h2>My Volunteer</h2>
    <br/>
    <img src="images/esc.jpg" width="150px" />
    <p>The Engineering Service Community is the creative education design including a challenge for students to create an innovative and useful invention for a community in rural areas of Indonesia. This is an annual program since 2014, dedicated for the local community in a remote area. My experience here was as one of its participant, in which my group went on a survey to Ciwidey interviewing one of its citizen (who is a coffee plantation owner) to formulate an invention that could help his business, that invention being a coffee roaster that would help him roast his raw coffee beans without having to send them far away from his village, which in turn safe a lot of spending on his part.</p>
    <br/>
  `;
  modalText.innerHTML = htmlContent;
  modal.style.display = "block";
});

// Mengubah isi konten dari modal my-volunteer
const myInternship = document.getElementById("my-internship");
myInternship.addEventListener("click", () => {
  //dibawah ini merupakan kode HTML untuk merubah isi konten
  const htmlContent = `
    <h2>My Internship</h2>
    <br/>
    <img src="images/indigo.png" width="200px" />
    <p>Indigo is an incubator and accelerator program in Indonesia. Where they foster startups by creating programs that vary from startup establishment, growth, and helping them through a synergy process to create the best startup for the nation. My role here as an intern was to assist the Incubation divison to make notes about the imporatant point they made when they do meetings with startups' owners & employees, while also contact said startups staff to inform them about the document and other relevant files that need to be uploaded to Indigo's google.</p>
    <br/>
  `;
  modalText.innerHTML = htmlContent;
  modal.style.display = "block";
});
