export default function MyMine() {
  return (
    <div style={{
      display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        minHeight: "60vh",
        textAlign: "center",
        padding: "0 1rem",
    }}>
      <h1 style={{
        fontFamily: "var(--font-heading)",
        fontSize: "2.5rem",
        fontWeight: "600",
        letterSpacing: "-0.05em",
        color: "var(--text-primary)",
        userSelect: "none",
        marginTop: "-20rem",
      }}>
        Saya Zaidan
      </h1>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.6",
          color: "var(--text-muted, #888)",
          maxWidth: "500px",
          margin: 0,
        }}
      >
        Siswa Rekayasa Perangkat Lunak SMK Negeri 2 Surakarta.
      </p>
    </div>
  );
}
