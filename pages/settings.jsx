import { useTheme } from "../hooks/useTheme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ColorPicker from "../components/ColorPicker";

export default function Settings() {
  const { theme, changeTheme } = useTheme();

  const handleColorChange = (colorType, newColor) => {
    changeTheme({ ...theme, [colorType]: newColor });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}>
      <Header />
      <main className="page-wrapper py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Customize Your UI</h1>
        <div className="max-w-md mx-auto space-y-6">
          <div>
            <label className="block mb-2">Background Color:</label>
            <ColorPicker currentColor={theme.background} onChange={(color) => handleColorChange("background", color)} />
          </div>
          <div>
            <label className="block mb-2">Foreground (Text) Color:</label>
            <ColorPicker currentColor={theme.foreground} onChange={(color) => handleColorChange("foreground", color)} />
          </div>
          <div>
            <label className="block mb-2">Accent Color:</label>
            <ColorPicker currentColor={theme.accent} onChange={(color) => handleColorChange("accent", color)} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
