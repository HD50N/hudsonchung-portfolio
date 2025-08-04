export const Swimming = () => {
    const achievements = [
        "2x New York State Champion",
        "All-American Swimmer",
        "HGHS Varsity Swim Team Captain",
        "ConEdison Scholar Athlete Award",
        "Summer Junior Nationals Qualifier",
        "USA Eastern Zone Select Camp"
    ];

    const articles = [
        {
            title: "Swimming: Horace Greeley junior wins two Section 1 individual championships",
            description: "Hudson Chung won the 100-yard butterfly and 500 freestyle at Section 1 championships, leading Greeley to team title",
            link: "https://www.lohud.com/story/sports/high-school/swimming/2022/02/09/swimming-greeley-junior-hudson-chung-won-four-section-1-titles/6682148001/",
            date: "February 2022"
        },
        {
            title: "Con Edison Athlete of the Week: Horace Greeley's Hudson Chung",
            description: "Featured as Con Edison Athlete of the Week for his outstanding performance at state championships and multiple Section 1 titles",
            link: "https://www.lohud.com/story/sports/high-school/swimming/2022/03/11/con-edison-athlete-week-horace-greeley-swimmer-hudson-chung/9447208002/",
            date: "March 2022"
        },
        {
            title: "Con Edison Scholar Athlete Week Video",
            description: "Video feature highlighting Hudson's achievements as Con Edison Scholar Athlete of the Week",
            link: "https://www.facebook.com/watch/?v=793296652043338",
            date: "March 2022"
        },
        {
            title: "Greeley Boys Swim and Dive Team Coverage",
            description: "Local press coverage of the Horace Greeley boys swimming and diving team's achievements",
            link: "https://www.theinsidepress.com/tag/greeley-boys-swim-and-dive-team/",
            date: "2022-2023"
        },
        {
            title: "Boys swimming: Horace Greeley successfully defends state championship",
            description: "Hudson Chung and the 400-yard freestyle relay team won their second straight NYSPHSAA championship, breaking multiple records",
            link: "https://www.lohud.com/story/sports/high-school/swimming/2023/03/04/section-1-swimming-horace-greeley-defends-ny-state-title/69956155007/",
            date: "March 2023"
        },
        {
            title: "Horace Greeley Boys Defend New York High School State Title in Dominant Fashion",
            description: "SwimSwam coverage of Greeley's dominant performance at the NYSPHSAA state championships",
            link: "https://swimswam.com/horace-greeley-boys-defend-new-york-high-school-state-title-in-dominant-fashion/",
            date: "March 2023"
        }
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
                        <iframe id="preview-frame" src="https://www.swimcloud.com/swimmer/1149977/iframe/?splashes_type=fastest" width="100%" height="500px" frameBorder="0"></iframe>
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

                {/* Articles Section */}
                <div className="w-full">
                    <div className="p-6 rounded-xl border-[#0033A0]/50 border hover:-translate-y-1 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.2)] transition-all">
                        <h2 className="text-xl font-bold mb-6 text-[#0033A0] text-center">
                            Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {articles.map((article, index) => (
                                <div key={index} className="p-4 rounded-lg border border-[#0033A0]/20 hover:border-[#0033A0] hover:shadow-[0_2px_8px_rgba(0, 51, 160, 0.1)] transition-all flex flex-col">
                                    <h3 className="font-semibold text-[#0033A0] mb-2">{article.title}</h3>
                                    <p className="text-sm text-[#4A4A4A] mb-3 flex-grow">{article.description}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-xs text-[#666]">{article.date}</span>
                                        <a 
                                            href={article.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[#0033A0] text-sm font-medium hover:text-[#00BFFF] transition-colors"
                                        >
                                            {article.link.includes('facebook.com/watch') ? 'Watch Video →' : 'Read Article →'}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}