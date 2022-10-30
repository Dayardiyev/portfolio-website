import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full min-h-screen">
      <div className="lg:container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px] lg:mb-10 mx-auto">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen lg:sticky top-44">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-8 ">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
