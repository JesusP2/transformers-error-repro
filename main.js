const fileInput = document.querySelector("#file-input");

const worker = new Worker('/worker.js', {
  type: 'module'
})

fileInput.addEventListener('change', e => {
  const file = e.target.files[0]
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e) => {
    if (!worker) return;
    worker.postMessage({
      type: 'remove_background',
      data: e.target?.result,
    });
  };
})
