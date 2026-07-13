export default function MyMine() {

    const dailyLogs = [
    { day: "Day wan", content: "Belajar React & bikin To-Do List app" },
    { day: "Day tu", content: "gtw" },
    { day: "Day tri", content: "gtw" },
  ];

  return (
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "60vh",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        {dailyLogs.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              gap: "1.5rem",
            }}
          >

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "var(--text-primary)",
                margin: 0,
                minWidth: "80px",
                marginTop: "-5rem",
              }}
            >
              {item.day}
            </h2>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.5",
                color: "var(--text-muted, #888)",
                margin: 0,
              }}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}