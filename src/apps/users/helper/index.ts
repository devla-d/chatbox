export const closeDialog = () => {
  var dialog = document.getElementById("dialogComp") as HTMLDivElement;
  dialog.classList.remove("active");
};

export const openDialog = () => {
  var dialog = document.getElementById("dialogComp") as HTMLDivElement;
  dialog.classList.add("active");
};

export const uploadImg = () => {
  var fileUpload = document.getElementById("fileUpload") as HTMLInputElement;
  fileUpload.click();
};
