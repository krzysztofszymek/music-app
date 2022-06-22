import Layout from "./components/Layout/Layout";
import Player from "./components/Player/Player";
import Playlist from "./components/Playlist/Playlist";

function App() {
  return (
    <div className="App">
      <Layout>
        <Player />
        <Playlist />
      </Layout>
    </div>
  );
}

export default App;