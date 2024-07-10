import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DetectionLogList } from "./detectionLog/DetectionLogList";
import { DetectionLogCreate } from "./detectionLog/DetectionLogCreate";
import { DetectionLogEdit } from "./detectionLog/DetectionLogEdit";
import { DetectionLogShow } from "./detectionLog/DetectionLogShow";
import { DetectedMusicList } from "./detectedMusic/DetectedMusicList";
import { DetectedMusicCreate } from "./detectedMusic/DetectedMusicCreate";
import { DetectedMusicEdit } from "./detectedMusic/DetectedMusicEdit";
import { DetectedMusicShow } from "./detectedMusic/DetectedMusicShow";
import { AudioSampleList } from "./audioSample/AudioSampleList";
import { AudioSampleCreate } from "./audioSample/AudioSampleCreate";
import { AudioSampleEdit } from "./audioSample/AudioSampleEdit";
import { AudioSampleShow } from "./audioSample/AudioSampleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SadStuff"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DetectionLog"
          list={DetectionLogList}
          edit={DetectionLogEdit}
          create={DetectionLogCreate}
          show={DetectionLogShow}
        />
        <Resource
          name="DetectedMusic"
          list={DetectedMusicList}
          edit={DetectedMusicEdit}
          create={DetectedMusicCreate}
          show={DetectedMusicShow}
        />
        <Resource
          name="AudioSample"
          list={AudioSampleList}
          edit={AudioSampleEdit}
          create={AudioSampleCreate}
          show={AudioSampleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
