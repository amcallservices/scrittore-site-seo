import { ImageResponse } from "next/og";

export const alt = "Scrittore Site — scrivi il tuo libro con l'intelligenza artificiale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "74px", color: "#ffffff", background: "linear-gradient(135deg, #082440 0%, #155c93 58%, #2b9bd7 100%)", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", marginBottom: "30px", color: "#9edcff", fontSize: 24, fontWeight: 700, letterSpacing: 4 }}>SCRITTORE SITE</div>
      <div style={{ display: "flex", maxWidth: "940px", fontSize: 70, fontWeight: 800, lineHeight: 1.04, letterSpacing: -3 }}>Scrivi il tuo libro, con il tuo metodo.</div>
      <div style={{ display: "flex", marginTop: "30px", maxWidth: "850px", fontSize: 30, lineHeight: 1.35, color: "#dceefd" }}>Progetta, scrivi, controlla ed esporta il tuo manoscritto con un ambiente editoriale guidato.</div>
      <div style={{ display: "flex", marginTop: "48px", padding: "15px 23px", borderRadius: 14, background: "#ffffff", color: "#155c93", fontSize: 23, fontWeight: 800 }}>Indice · Scrittura · Controlli · Esportazione</div>
    </div>,
    size,
  );
}
