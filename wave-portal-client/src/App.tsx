import "app/styles/App.css";
import WaveCard from "./app/components/WaveCard";
import ProfileSection from "./app/components/ProfileSection";
function App() {
  return (
    <div className="App bg-background min-h-screen flex flex-col sm:grid sm:grid-cols-12 lg:gap-6 gap-4 p-5 xl:p-10">
      <ProfileSection />
      <main className="p-4  border-secondary border-2 col-span-8 xl:col-span-9 rounded-lg">
        <h3 className="text-3xl text-text font-semibold mb-4">Waves (32)</h3>
        <hr className="border-text/40" />
        <div className="flex flex-col gap-4 mt-4 ">
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
          <WaveCard />
        </div>
      </main>
    </div>
  );
}

export default App;
