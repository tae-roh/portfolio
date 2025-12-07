import React from 'react';
import { RESUME_DATA } from './constants';

const App: React.FC = () => {
  // Logic to separate the last name for bold styling
  const nameParts = RESUME_DATA.name.split(' ');
  const lastName = nameParts.pop(); // Get the last word
  const firstName = nameParts.join(' '); // Join the rest back together

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Header Section */}
        <header className="mb-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl mb-3 tracking-tight text-black">
              <span className="font-normal">{firstName}</span> <span className="font-bold">{lastName}</span>
            </h1>
            {/* <p className="text-gray-500 text-sm font-medium">
              {RESUME_DATA.pronunciation}
            </p> */}
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-12">
            {/* Intro Text & Links */}
            <div className="flex-1 text-left">
              <div className="text-[1.05rem] leading-relaxed text-gray-800 space-y-4 whitespace-pre-line">
                {RESUME_DATA.intro.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{
                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')
                  }} />
                ))}
              </div>
              
              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[0.95rem]">
                <a 
                  href="cv.pdf" 
                  className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
                {RESUME_DATA.contacts.map((contact, index) => (
                  <React.Fragment key={contact.type}>
                    <span className="text-gray-300">|</span>
                    <a 
                      href={contact.link} 
                      className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {contact.label}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
                <img 
                  src="profile.jpg" 
                  alt={RESUME_DATA.name} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="space-y-12">

          {/* Experience (Styled as Publications) */}
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-6 font-sans">Experience</h2>
            
            <div className="space-y-8">
              {RESUME_DATA.work.map((item) => (
                <div key={item.id} className="group">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-gray-700 mt-1">
                    <span className="font-medium text-black">{item.role}</span>, {item.description}
                  </div>
                  <div className="text-gray-500 text-sm font-medium mt-1">
                    {item.date}
                  </div>
                  {item.links && item.links.length > 0 && (
                    <div className="mt-2 flex gap-3 text-sm">
                      {item.links.map((link, idx) => (
                        <React.Fragment key={idx}>
                          <a href={link.url} className="text-blue-600 hover:underline hover:text-blue-800 lowercase">
                            {link.text}
                          </a>
                          {idx < (item.links?.length || 0) - 1 && (
                            <span className="text-gray-300">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-6 font-sans">Projects</h2>
            <p className="text-sm text-gray-500 mb-6 italic">(*: key projects)</p>
            <div className="space-y-8">
              {RESUME_DATA.projects.map((item) => (
                <div key={item.id} className="group">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-gray-700 mt-1">
                    {item.description}
                  </div>
                  <div className="text-gray-500 text-sm font-medium mt-1">
                    {item.date}
                  </div>
                  {item.links && item.links.length > 0 && (
                    <div className="mt-2 flex gap-3 text-sm">
                      {item.links.map((link, idx) => (
                        <React.Fragment key={idx}>
                          <a 
                            href={link.url} 
                            className="text-blue-600 hover:underline hover:text-blue-800 lowercase"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                          </a>
                          {idx < (item.links?.length || 0) - 1 && (
                            <span className="text-gray-300">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

           {/* Education */}
           <section>
            <h2 className="text-3xl font-light text-gray-900 mb-6 font-sans">Education</h2>
            <div className="space-y-4">
              {RESUME_DATA.education.map((item) => (
                <div key={item.id}>
                  <div className="text-lg font-bold text-gray-900 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-gray-700 mt-1">
                    B.S. in {item.description} & {item.description2}
                  </div>
                  <div className="text-gray-700 mt-1">
                    GPA: {item.gpa}  
                  </div>
                  <div className="text-gray-500 text-sm font-medium mt-1">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

      </div>

    </div>
  );
};

export default App;