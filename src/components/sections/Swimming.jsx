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
        <section id="swimming" className="min-h-screen py-20 bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1 className="text-heading font-bold mb-4 gradient-text">
                        Swimming
                    </h1>
                    <p className="text-body max-w-2xl mx-auto">
                        Competitive swimming achievements and media coverage from my high school career
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Top Times Card */}
                    <div className="card p-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                        <h2 className="text-subheading font-semibold mb-6 text-[#1A1A1A] text-center">
                            Top Times
                        </h2>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <iframe 
                                id="preview-frame" 
                                src="https://www.swimcloud.com/swimmer/1149977/iframe/?splashes_type=fastest" 
                                width="100%" 
                                height="500px" 
                                frameBorder="0"
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Achievements Card */}
                    <div className="card p-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        <h2 className="text-subheading font-semibold mb-6 text-[#1A1A1A] text-center">
                            Achievements & Accolades
                        </h2>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#EFF6FF] to-[#DBEAFE] rounded-lg border border-[#BFDBFE]"
                                >
                                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                                    <span className="text-[#1A1A1A] font-medium">{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Videos Section */}
                <div className="card p-8 mb-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <h2 className="text-subheading font-semibold mb-6 text-[#1A1A1A] text-center">
                        Videos
                    </h2>
                    <div className="flex justify-center">
                        <a 
                            href="https://photos.app.goo.gl/aBSXKn1rcxX9HQgw5" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-primary"
                        >
                            Watch Videos
                        </a>
                    </div>
                </div>

                {/* Articles Section */}
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="card p-8">
                        <h2 className="text-subheading font-semibold mb-8 text-[#1A1A1A] text-center">
                            Articles
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.map((article, index) => (
                                <div key={index} className="card p-6 hover:shadow-lg transition-all duration-300">
                                    <h3 className="font-semibold text-[#1A1A1A] mb-3 text-lg">{article.title}</h3>
                                    <p className="text-sm text-[#525252] mb-4 flex-grow">{article.description}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-xs text-[#737373] bg-[#F5F5F5] px-2 py-1 rounded-full">{article.date}</span>
                                        <a 
                                            href={article.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-[#3B82F6] text-sm font-medium hover:text-[#1D4ED8] transition-colors flex items-center space-x-1"
                                        >
                                            <span>{article.link.includes('facebook.com/watch') ? 'Watch Video' : 'Read Article'}</span>
                                            <span>→</span>
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