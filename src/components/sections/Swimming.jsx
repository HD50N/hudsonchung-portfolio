export const Swimming = () => {
    const topTimes = [
        { event: "50m Freestyle", time: "23.45s", meet: "Phoenix", year: "2024" },
        { event: "100m Freestyle", time: "51.23s", meet: "Phoenix", year: "2024" },
        { event: "200m Freestyle", time: "1:52.34", meet: "Phoenix", year: "2024" },
        { event: "400m Freestyle", time: "3:58.76", meet: "Phoenix", year: "2024" },
    ];

    const achievements = [
        "Gold Medalist at State Championships 2024",
        "Silver Medalist at National Championships 2023",
        "Bronze Medalist at International Swim Meet 2022",
    ];

    const accolades = [
        "Swimmer of the Year 2024",
        "Most Improved Swimmer 2023",
        "Best Performance Award 2022",
    ];

    return (
        <section id="swimming" className="min-h-screen flex items-center justify-center py-20 bg-[#FFFFFF]">
            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
                <h1 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#0033A0] to-[#00BFFF] bg-clip-text text-transparent leading-right text-center">
                    Swimming
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h2 className="text-xl font-bold mb-4 text-[#0033A0] text-center">
                            Top Times
                        </h2>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            {topTimes.map((time, index) => (
                                <li key={index}>
                                    <strong>{time.event}:</strong> {time.time} @ {time.meet} ({time.year})<br />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h2 className="text-xl font-bold mb-4 text-[#0033A0] text-center">
                            Achievements & Accolades
                        </h2>
                        <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                            {achievements.map((achievement, index) => (
                                <li key={index}>{achievement}</li>
                            ))}
                            {accolades.map((accolade, index) => (
                                <li key={index}>{accolade}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}