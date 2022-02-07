const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 21, name: "foto.png" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

// Move a file to a folder using file Id and folder Id
Array.prototype.move = function (fileId, folderId) {
  if (typeof fileId !== "number" && typeof folderId !== "number") {
    console.log("Please enter a valid input");
    return -1;
  }
  // Filter out the folders that do not have any file
  const fileFolders = folders.filter(function (element) {
    return element.files;
  });
  // Give copied file a default value of -1 for not finding a file
  let movedFile = -1;
  fileFolders.map(function (element) {
    element.files.map(function (file, i) {
      // If file is found delete file with its index and return the deleted file
      if (file.id === fileId) {
        movedFile = element.files.splice(i, 1);
      }
    });
  });
  // If file with given file Id do not exist return -1
  if (movedFile === -1) {
    console.log("No file with that id!");
    return -1;
  }
  // Get the files in the target folder
  this.map(function (element) {
    if (element.id === folderId) {
      if (element.files) {
        element.files.push(movedFile[0]);
      } else {
        element.files = [];
        element.files.push(movedFile[0]);
      }
    }
  });
  return movedFile[0];
};

// Copy a file to a folder using file Id and folder Id
Array.prototype.copy = function (fileId, folderId) {
  if (typeof fileId !== "number" && typeof folderId !== "number") {
    console.log("Please enter a valid input");
    return -1;
  }
  // Filter out the folders that do not have any file
  const fileFolders = folders.filter(function (element) {
    return element.files;
  });
  // Give copied file a default value of -1 for not finding a file
  let copiedFile = -1;
  fileFolders.map(function (element) {
    element.files.map(function (file, i) {
      // If file is found delete file with its index and return the deleted file
      if (file.id === fileId) {
        copiedFile = element.files.slice(i, i + 1);
      }
    });
  });
  // If file with given file Id do not exist return -1
  if (copiedFile === -1) {
    console.log("No file with that id!");
    return -1;
  }
  // Get the files in the target folder
  this.map(function (element) {
    if (element.id === folderId) {
      if (element.files) {
        element.files.push(copiedFile[0]);
      } else {
        element.files = [];
        element.files.push(copiedFile[0]);
      }
    }
  });
  return copiedFile[0];
};

// Remove a specific file from any folder by its id
Array.prototype.remove = function (fileId) {
  // Ensure proper file Id input
  if (typeof fileId !== "number") {
    console.log("Please enter a valid file Id!");
    return -1;
  }
  // Filter out the folders that do not have any file
  const fileFolders = folders.filter(function (element) {
    return element.files;
  });
  // Give deleted file a default value of -1 for not finding a file
  let deletedFile = -1;
  fileFolders.map(function (element) {
    element.files.map(function (file, i) {
      // If file is found delete file with its index and return the deleted file
      if (file.id === fileId) {
        deletedFile = element.files.splice(i, 1);
      }
    });
  });
  return deletedFile;
};

// Remove a object from a array depending on its id
Array.prototype.removeFolder = function (folderId) {
  // Ensure proper file Id input
  if (typeof folderId !== "number") {
    console.log("Please enter a valid folder Id!");
    return -1;
  }
  // check if there is a folder and get its index
  const index = this.findIndex(function (element) {
    return element.id === folderId;
  });
  // If there is no folder with that id in the array return -1
  if (index === -1) {
    return -1;
  } else {
    return this.splice(index, 1); // return the deleted folders content and delete the folder by its index
  }
};

// Find the id of the parent folder of a file in a array or return -1 if there is no such file
Array.prototype.parentFolderOf = function (fileId) {
  // Ensure proper file Id input
  if (typeof fileId !== "number") {
    console.log("Please enter a valid file Id!");
    return -1;
  }
  // Filter out the folders that do not have any file
  const fileFolders = folders.filter(function (element) {
    return element.files;
  });
  // Give a default index of -1 for not finding the file
  let index = -1;
  fileFolders.map(function (element) {
    element.files.map(function (file) {
      if (file.id === fileId) {
        index = element.id;
      }
      return;
    });
  });
  return index;
};