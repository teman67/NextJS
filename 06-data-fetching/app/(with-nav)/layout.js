import MainHeader from "../../components/MainHeader";

export default function WithNavLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
