import Header from "../MainPage/Header/Header";

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
export default Layout;
