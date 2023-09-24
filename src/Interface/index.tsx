interface Button {
  btnClass?: string;
  title: string;
  onClick?: (e: any) => unknown | (() => void);
  // className?: string;
}
