interface ButtonDefault {
  btnClass?: string;
  title: string;
  onClick?: (e: any) => unknown | (() => void);
  // className?: string;
}

interface ProgressDefault {
  progress: number;
}

interface ArrayFilesType {
  imageLink: string;
  id: string;
}
