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
const move = (fileId, folderId) => {
  // Ensure proper file Id and folder Id input
  if (typeof fileId !== "number" && typeof folderId !== "number") {
    console.log("Please enter a valid input");
    return -1;
  }
  // Initialize target file for scope
  let targetFile = undefined;
  // Find the file with its file id
  const sourceFolder = folders.find((folder) => {
    if (folder.files) {
      targetFile = folder.files.find((file) => {
        return file.id === fileId;
      });
      return targetFile;
    }
  });
  
  // If file is not found return -1 else continue copying file to target folder
  if (sourceFolder === undefined)
  {
    console.log("No file with that file id!")
    return -1
  } else {
    // check if there is a target folder and get its index
    const targetIndex = folders.findIndex((folder) => {
      return folder.id === folderId;
    });
    // Check if the target folder exists
    if (targetIndex === -1) {
      console.log("No target folder with that folder id!")
      return -1
    } 
    // If target and source folder is same do nothing, else put target file to the target folder
    if (sourceFolder.id === folders[targetIndex].id )
    {
      return targetFile
    } else {
      folders[targetIndex].files ? folders[targetIndex].files.push(targetFile) : folders[targetIndex] = {...folders[targetIndex], files: [targetFile]} // Check if the folder has files array, if not create it and add the file
      // Delete the file from the source folder depending on its index
      const fileIndex = sourceFolder.files.indexOf(targetFile)
      sourceFolder.files.splice(fileIndex, 1)
    }
  }
  return targetFile
};

// Copy a file to a folder using file Id and folder Id
const copy = (fileId, folderId) => {
  // Ensure proper file Id and folder Id input
  if (typeof fileId !== "number" && typeof folderId !== "number") {
    console.log("Please enter a valid input");
    return -1;
  }
  // Initialize target file for scope
  let targetFile = undefined;
  // Find the file with its file id
  const sourceFolder = folders.find((folder) => {
    if (folder.files) {
      targetFile = folder.files.find((file) => {
        return file.id === fileId;
      });
      return targetFile;
    }
  });
  
  // If file is not found return -1 else continue copying file to target folder
  if (sourceFolder === undefined)
  {
    console.log("No file with that file id!")
    return -1
  } else {
    // check if there is a folder and get its index
    const index = folders.findIndex((folder) => {
      return folder.id === folderId;
    });
    // Check if the target folder exists
    if (index === undefined) {
      console.log("No target folder with that folder id!")
      return -1
    } 
    // If target and source folder is same do nothing else put target file to the target folder
    if (sourceFolder.id === folders[index].id )
    {
      return targetFile
    } else {
      folders[index].files ? folders[index].files.push(targetFile) : folders[index] = {...folders[index], files: [targetFile]} // Check if the folder has files array, if not create it and add the file
    }
  }
  return targetFile
}

// Remove a specific file from any folder by its id
const remove = (fileId) => {
  // Ensure proper file Id input
  if (typeof fileId !== "number") {
    console.log("Please enter a valid file Id!");
    return -1;
  }
  // Initialize variable for proper scope
  let deletedFile;
  // Find the file with its file id
  const targetFolder = folders.find((folder) => {
    if (folder.files) {
      const targetFile = folder.files.find((file) => {
        return file.id === fileId;
      });
      // If file is found delete it
      if (targetFile) {
        const fileIndex = folder.files.indexOf(targetFile); // Find index of the file
        deletedFile = folder.files.splice(fileIndex, 1); // Delete the file depending on its index
      }
      return targetFile;
    }
  });

  // If file is found return deleted file, else return -1
  return targetFolder ? deletedFile : -1;
};

// Remove a object from a array depending on its id
const removeFolder = (folderId) => {
  // Ensure proper folder Id input
  if (typeof folderId !== "number") {
    console.log("Please enter a valid folder Id!");
    return -1;
  }
  // check if there is a folder and get its index
  const index = folders.findIndex((folder) => {
    return folder.id === folderId;
  });
  // If there is folder with that id delete it, else return -1
  return index >= 0 ? folders.splice(index, 1) : -1;
};

// Find the id of the parent folder of a file in a array or return -1 if there is no such file
const parentFolderOf = (fileId) => {
  // Ensure proper file Id input
  if (typeof fileId !== "number") {
    console.log("Please enter a valid file Id!");
    return -1;
  }
  // Find the folder that has the file
  const parentFolder = folders.find((folder) => {
    if (folder.files) {
      return folder.files.find((file) => {
        return file.id === fileId;
      });
    }
  });
  // Return id if it is found, -1 if it is not
  return parentFolder ? parentFolder.id : -1;
};