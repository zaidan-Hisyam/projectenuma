export default function About() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      minHeight: "60vh",
      gap: "20px",
    }}>
      <h1 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "5rem",
        fontWeight: "600",
        letterSpacing: "-0.05em",
        color: "var(--text-primary)",
        userSelect: "none",
        margin: 0,
      }}>
        Dahsyat
      </h1>

      <img 
        src="/img.jpeg" 
        alt="Gokil" 
        style={{
          width: "300px",
          height: "auto",
          borderRadius: "12px",
        }} 
      />
    </div>
  );
}