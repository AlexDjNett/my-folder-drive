interface ButtonDefault {
  btnClass?: string;
  title: string;
  onClick?: (e: any) => unknown | (() => void);
  ref?: any;
  // className?: string;
}

interface ProgressDefault {
  progress: number;
}

interface ArrayFilesType {
  imageLink: string;
  id: string;
  imageName: string;
  isFolder: boolean;
  folderName: string;
  parentId: string;
}

interface AddFolderPayload {
  folderName: string;
  isFolder: boolean;
  fileList: object;
  parentId: string;
  userEmail: string;
}

interface UploadProps {
  parentId: string;
}

interface ShowFilesProps {
  parentId: string;
}
