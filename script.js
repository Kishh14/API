// fetch("https://facebook-maskcut.hf.space/run/predict", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     data: [
//       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==",
//       0.15,
//       6,
// 	]
//   })
// })
// .then(r => r.json())
// .then(r => {
//   let data = r.data;
//   displayData(data);
// });

// const displayData = data => {
//   const div = document.createElement("div");
//   div.innerHTML = JSON.stringify(data);
//   document.body.appendChild(div);
// };

const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", e => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const dataUrl = reader.result;
    const image = dataUrl.split(",")[1];
    fetch("https://facebook-maskcut.hf.space/run/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [image, 0.15, 6]
      })
    })
      .then(r => r.json())
      .then(r => {
        let data = r.data;
        displayData(data);
      });
  };
});


const displayData = data => {
  const div = document.createElement("div");
  div.innerHTML = JSON.stringify(data);
  document.body.appendChild(div);
};












