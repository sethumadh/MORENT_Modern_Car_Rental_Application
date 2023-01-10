export type VoidFunction = () => void;

export type useStateSetter<T> = React.Dispatch<React.SetStateAction<T>>

export type ContextProps = {
  children: React.ReactNode;
}

export type Dispatch = React.Dispatch<string>;
