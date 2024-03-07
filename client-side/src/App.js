import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDemoGetApi, useDemoPostApi } from "ApiHelper";
import { useEffect } from "react";

function App() {
  const { data, isLoading, isError } = useDemoGetApi({});
  const DemoApiMutation = useDemoPostApi();

  console.table(data?.data);

  const postBtn = async () => {
    const bodyData = {};
    let result = await DemoApiMutation.mutateAsync(bodyData);
    console.log(result?.data);
  };

  useEffect(() => {
    postBtn();
  }, []);

  return (
    <div>
      <Routes>{/* <Route path='/' /> */}</Routes>
    </div>
  );
}

export default App;
