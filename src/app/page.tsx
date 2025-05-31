export default function Home() {
  return (
    <div id="main-section" className="h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
      <div
        id="home-section"
        className="h-[calc(100vh-80px)] w-screen bg-blue-200 snap-start"
      >
        Test
      </div>
      <div
        id="about-section"
        className="h-[calc(100vh-80px)] w-screen bg-emerald-200 snap-start"
      >
        Test
      </div>
      <div
        id="skills-section"
        className="h-[calc(100vh-80px)] w-screen bg-purple-200 snap-start"
      >
        Test
      </div>
    </div>
  );
}
