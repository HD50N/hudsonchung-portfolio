export const Swimming = () => {
    const achievements = [
        "2x New York State Champion",
        "All-American Swimmer",
        "HGHS Varsity Swim Team Captain",
        "ConEdison Scholar Athlete Award",
        "Summer Junior Nationals Qualifier",
        "USA Eastern Zone Select Camp"
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
                        <iframe id="preview-frame" src="https://www.swimcloud.com/swimmer/1149977/iframe/?splashes_type=fastest" width="100%" height="500px" frameborder="0"></iframe>
                    </div>

                    <div className="flex flex-col justify-between space-y-6">
                        <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                            <h2 className="text-xl font-bold mb-4 text-[#0033A0] text-center">
                                Achievements & Accolades
                            </h2>
                            <ul className="list-disc list-inside text-[#4A4A4A] space-y-2">
                                {achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-grow p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all flex flex-col justify-center">
                            <h2 className="text-xl font-bold mb-4 text-[#0033A0] text-center">
                                Videos
                            </h2>
                            <div className="flex justify-center">
                                <a href="https://photos.app.goo.gl/aBSXKn1rcxX9HQgw5" target="_blank" rel="noopener noreferrer" className="bg-[#0033A0] text-white py-2 px-4 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0, 51, 160, 0.4)]">
                                    Watch Videos
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}