interface ILink {
  id?: number | string;
  text?: string;
  onClick?: () => void;
  color?: string;
  href: string;
}

export default ILink;
