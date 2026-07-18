export default function MyMine() {

    const dailyLogs = [
    { day: "Day 1", content: "Belajar React & bikin To-Do List app" },
    { day: "Day 2", content: "Belajar membuat website dengan menggunakan react dan supabase dengan bantuan AI (vibecoding)" },
    { day: "Day 3", content: "Belajar membuat website Portofolio" },
    { day: "Day 4", content: "Belajar IoT untuk membuat sistem sensor suhu dengan menggunakan website Simulator Wokwi" },
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