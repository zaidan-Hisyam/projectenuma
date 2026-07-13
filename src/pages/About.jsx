export default function About() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      minHeight: "60vh",
    }}>
      <h1 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "5rem",
        fontWeight: "600",
        letterSpacing: "-0.05em",
        color: "var(--text-primary)",
        userSelect: "none",
      }}>
        anjay mabar
      </h1>
    </div>
  );
}
