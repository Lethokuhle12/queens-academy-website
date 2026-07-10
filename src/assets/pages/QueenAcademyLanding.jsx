import React, { useState } from 'react'; // Add useState import


export default function QueenAcademyLanding() {

  
  const imagePaths = {
    hero: '/assets/images/hero.jpg',
    logo: '/assets/images/logo.jpg',
    about: '/assets/images/about.jpg',
    vision: '/assets/images/vision.jpg',
    programmes: '/assets/images/programmes.jpg',
    facilities: '/assets/images/facilities.jpg',
    learners: '/assets/images/learners.jpg',
    staff: '/assets/images/staff.jpg',
    values: '/assets/images/values.jpg',
    plans: '/assets/images/plans.jpg',
    contact: '/assets/images/contact.jpg',
  };

  // GALLERY SECTION - EASILY CONTROL NUMBER OF IMAGES
  const totalGalleryImages = 12; // Total images available
  const initialImagesToShow = 4; // Initial number of images to show
  const [imagesToShow, setImagesToShow] = useState(initialImagesToShow); // Add this state
  
  const galleryImages = Array.from(
    { length: totalGalleryImages }, 
    (_, i) => `/assets/images/gallery/IMAGES${i + 1}.jpg`
  );

  // Add these functions
  const handleShowMore = () => {
    // Show 4 more images each time, up to the total
    setImagesToShow(prev => Math.min(prev + 4, totalGalleryImages));
  };

  const handleShowLess = () => {
    // Reset to initial number
    setImagesToShow(initialImagesToShow);
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white">
      {/* HERO */}
      <header className="relative h-screen max-h-[820px] overflow-hidden">
        <img
          src={imagePaths.hero}
          alt="Queen Academy campus"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          loading="eager"
        />

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
             {/* Enhanced Logo Section - Centered */}
<div className="flex justify-center mb-6">
  <div className="inline-flex items-center gap-4">
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#5B2E8A] to-[#F5C542] shadow-2xl flex items-center justify-center overflow-hidden ring-4 ring-white/30">
      <img 
        src={imagePaths.logo} 
        alt="Queen Academy Logo"
        className="w-full h-full object-cover p-1"
      />
    </div>
    <div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Queen Academy</h2>
      <div className="text-sm md:text-base opacity-90 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full inline-block mt-1">
        <h1 className="">
          We Enter to Learn — <span className="text-[#F5C542]">We Leave to Achieve</span>
        </h1>
      </div>
    </div>
  </div>
</div>


              <p className="mt-6 text-lg md:text-xl max-w-2xl opacity-95 bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                A nurturing, future-ready primary school in Kliprivier — where character,
                technology and academic excellence meet. Small classes, big ambition.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-[#F5C542] text-[#0F172A] font-bold shadow-xl hover:scale-[1.03] transition-all duration-300 hover:shadow-2xl text-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Enrol Now
                </a>

                <a
                  href="#programmes"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 border-2 border-white/60 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                  Our Programmes
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Stat label="Learners" value="94" />
                <Stat label="Grades" value="1–4" />
                <Stat label="Location" value="Kliprivier" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Wave separator with animation */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" className="w-full h-20 md:h-32 fill-white">
            <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </header>

      <main className="-mt-1">
        {/* ABOUT */}
        <Section id="about" title="About Queen Academy" image={imagePaths.about}>
          <div className="max-w-3xl text-lg leading-relaxed space-y-4">
            <p>
              Queen Academy is a proudly South African independent primary school focused on nurturing
              confident, compassionate and future-ready learners. Small classes and a values-driven
              curriculum ensure every child receives individual attention.
            </p>
            <p>
              Founded with a vision to transform education in our community, we combine traditional
              values with modern teaching methodologies to prepare students for the challenges of tomorrow.
            </p>
          </div>
        </Section>

        {/* Vision & Mission */}
        <Section id="vision-and-mission" title="Vision & Mission" image={imagePaths.vision} bgColor="from-white/95 to-white/98">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
              title="Our Vision" 
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              }
            >
              To cultivate a future-ready generation of learners who are curious, ethical and innovative problem solvers, equipped to thrive in a rapidly changing world.
            </Card>
            
            <Card 
              title="Our Mission" 
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              }
            >
              Deliver transformative education through a balanced approach of academic rigour, digital fluency, character development, and community engagement.
            </Card>
          </div>
        </Section>

        {/* Academic Programme */}
        <Section id="programmes" title="Academic Programme" image={imagePaths.programmes}>
          <div className="max-w-4xl">
            <p className="text-lg mb-6">
              Our modern curriculum emphasizes literacy, numeracy, critical thinking and technology.
              Currently catering for Grades 1–4 with progressive expansion plans to higher grades.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <SubjectCard 
                title="Literacy" 
                description="Reading, writing & communication skills"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>}
              />
              <SubjectCard 
                title="Numeracy" 
                description="Mathematics & logical thinking"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>}
              />
              <SubjectCard 
                title="Technology" 
                description="Digital literacy & coding basics"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
              />
              <SubjectCard 
                title="Science" 
                description="Inquiry-based learning & discovery"
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>}
              />
            </div>
          </div>
        </Section>

        {/* Facilities */}
        <Section id="facilities" title="Facilities & Resources" image={imagePaths.facilities}>
          <div className="max-w-3xl">
            <ul className="space-y-4">
              <FeatureItem 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                }
                text="4 fully functional classrooms and a safe, fenced campus"
              />
              <FeatureItem 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                }
                text="Dedicated staff facilities and hygienic learner amenities"
              />
              <FeatureItem 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                }
                text="Ongoing upgrades for digital learning tools"
              />
              <FeatureItem 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                }
                text="Outdoor play areas for physical development"
              />
            </ul>
          </div>
        </Section>

        {/* Learners & Staff */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Our School Community</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A diverse and vibrant community dedicated to excellence in education</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <BackgroundCard 
              image={imagePaths.learners} 
              title="Our Learners" 
              subtitle="94 bright minds"
              count="94"
            >
              Small class sizes (average 24 learners per class) ensure personalised attention. 
              Our diverse student body represents the rich cultural tapestry of South Africa, 
              learning together in an inclusive, supportive environment.
            </BackgroundCard>

            <BackgroundCard 
              image={imagePaths.staff} 
              title="Educators & Staff" 
              subtitle="Qualified professionals"
              count="15"
            >
              Our dedicated team of educators are the heartbeat of Queen Academy. With ongoing 
              professional development and a passion for teaching, we maintain modern, effective 
              teaching practices that inspire young minds.
            </BackgroundCard>
          </div>
        </div>

        {/* Values & Extra-curricular */}
        <Section id="culture" title="School Culture & Values" image={imagePaths.values} bgColor="from-white/95 to-white/98">
          <div className="max-w-4xl">
            <h3 className="text-2xl font-bold text-[#5B2E8A] mb-6">Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              <ValuePill label="Respect" />
              <ValuePill label="Excellence" />
              <ValuePill label="Integrity" />
              <ValuePill label="Compassion" />
              <ValuePill label="Innovation" />
              <ValuePill label="Community" />
            </div>

            <div className="bg-gradient-to-r from-[#F5C542]/10 to-[#5B2E8A]/10 p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Extra-curricular Activities</h3>
              <p className="text-lg mb-4">
                We believe in holistic development through a variety of activities:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ActivityCard title="Sports" description="Soccer, athletics, and team sports" />
                <ActivityCard title="Creative Arts" description="Music, drama, and visual arts" />
                <ActivityCard title="Reading Clubs" description="Developing literacy & love for books" />
                <ActivityCard title="Life Skills" description="Practical skills for everyday life" />
                <ActivityCard title="Tech Club" description="Introduction to coding & robotics" />
                <ActivityCard title="Garden Club" description="Environmental awareness & gardening" />
              </div>
            </div>
          </div>
        </Section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">School Gallery</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A glimpse into life at Queen Academy - moments of learning, growth, and joy
              </p>
              
              {/* Image counter badge */}
              <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5B2E8A]/10 to-[#F5C542]/10 px-4 py-3 rounded-full">
                  <span className="text-sm font-medium text-[#5B2E8A]">
                    Showing {imagesToShow} of {totalGalleryImages} images
                  </span>
                  <span className="text-xs px-2 py-1 bg-white rounded-full font-semibold text-[#5B2E8A]">
                    {Math.round((imagesToShow / totalGalleryImages) * 100)}% visible
                  </span>
                </div>
              </div>
            </div>

            {/* Grid Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.slice(0, imagesToShow).map((imagePath, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={imagePath}
                      alt={`Queen Academy Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay with image number */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full text-white">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Gallery Image {index + 1}</span>
                        <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          IMAGES{index + 1}.jpg
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="font-bold text-[#5B2E8A] text-sm">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            <div className="mt-12 text-center">
              {imagesToShow < totalGalleryImages ? (
                <button
                  onClick={handleShowMore}
                  className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-gradient-to-r from-[#5B2E8A] to-[#8B5EB5] text-white font-bold shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                >
                  <svg 
                    className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Show More Images ({totalGalleryImages - imagesToShow} remaining)
                </button>
              ) : (
                <div className="flex flex-col items-center gap-6">
                 
                  
                  <button
                    onClick={handleShowLess}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 border-2 border-[#5B2E8A] text-[#5B2E8A] font-semibold hover:bg-[#5B2E8A] hover:text-white transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    Show Less Images
                  </button>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Short-term plans */}
        <Section id="plans" title="Short-term Development Plans" image={imagePaths.plans}>
          <div className="max-w-3xl">
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5B2E8A] to-[#F5C542] rounded-full"></div>
              <div className="ml-8 space-y-8">
                <PlanItem number="1" title="Infrastructure Expansion">
                  Complete additional classrooms for Grades 4–7 and upgrade existing facilities
                </PlanItem>
                <PlanItem number="2" title="Digital Transformation">
                  Roll out comprehensive digital administration and classroom tools
                </PlanItem>
                <PlanItem number="3" title="Community Engagement">
                  Expand community partnerships and admissions outreach programmes
                </PlanItem>
                <PlanItem number="4" title="Resource Enhancement">
                  Upgrade library, sports equipment, and learning materials
                </PlanItem>
              </div>
            </div>
          </div>
        </Section>

        {/* Admissions / Contact */}
        <Section id="admissions" title="Admissions & Contact" image={imagePaths.contact} bgColor="from-white/95 to-white/98">
          <div className="max-w-4xl">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#5B2E8A] mb-4">Enrolment Information</h3>
                  <p className="text-lg mb-6">
                    Enrolment is open for Grades 1–4. We welcome applications from diverse backgrounds 
                    and offer flexible payment options. Book a personalized school tour today to experience 
                    our learning environment.
                  </p>
                  
                  <div className="space-y-4">
                    <InfoItem text="Application Deadline: 30 November 2024" />
                    <InfoItem text="Grades: 1–4 (Expanding annually)" />
                    <InfoItem text="Flexible fee structure available" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#5B2E8A] mb-4">Get In Touch</h3>
                  
                  <a href="mailto:info@queenacademy.co.za" className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#5B2E8A] to-[#8B5EB5] text-white rounded-xl hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-sm opacity-90">info@queenacademy.co.za</div>
                    </div>
                  </a>
                  
                  <a href="tel:+27119036555" className="flex items-center gap-4 p-4 border-2 border-[#5B2E8A] rounded-xl hover:bg-[#5B2E8A] hover:text-white transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#5B2E8A] text-white rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-lg font-bold">011 903 6555</div>
                    </div>
                  </a>
                  
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      Visit Us
                    </h4>
                    <address className="not-italic text-slate-700">
                      50/1 Boven Road, Garthdale<br />
                      Kliprivier, Johannesburg<br />
                      1871, South Africa
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-[#0F172A] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#5B2E8A] to-[#F5C542] shadow-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src={imagePaths.logo} 
                    alt="Queen Academy Logo"
                    className="w-full h-full object-cover p-1"
                  />
                </div>
                <div>
                  <div className="font-bold text-xl">Queen Academy</div>
                  <div className="text-sm opacity-80">Excellence in Education</div>
                </div>
              </div>
              <div className="text-sm opacity-80">
                &copy; {new Date().getFullYear()} Queen Academy. All rights reserved.
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Building Tomorrow's Leaders Today</p>
              <p className="text-sm opacity-80 max-w-md mx-auto">
                Registered with the Department of Basic Education • Umalusi Accredited • Non-profit Institution
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm opacity-90 mb-2">
                Follow our journey on social media
              </p>
              <div className="flex justify-center md:justify-end gap-4">
                <SocialButton 
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Facebook"
                />
                <SocialButton 
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  }
                  label="Instagram"
                />
                <SocialButton 
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  }
                  label="Twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------------------- Reusable Components ---------------------- */

function Stat({ label, value }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300 text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-[#F5C542]">{value}</div>
      <div className="text-sm uppercase tracking-wider mt-2 opacity-90">{label}</div>
    </div>
  );
}

function Section({ id, title, children, image, bgColor = "from-white/90 to-white/95" }) {
  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src={image} 
          alt="" 
          className="w-full h-full object-cover object-center brightness-90" 
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${bgColor}`} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0F172A] mb-12">
          {title}
        </h2>
        <div className="max-w-6xl mx-auto">{children}</div>
      </div>
    </section>
  );
}

function Card({ title, children, icon }) {
  return (
    <div className="p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#5B2E8A] to-[#F5C542] flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{title}</h3>
      <div className="text-slate-700 text-lg leading-relaxed">{children}</div>
    </div>
  );
}

function SubjectCard({ title, description, icon }) {
  return (
    <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-[#5B2E8A]/10 rounded-lg flex items-center justify-center text-[#5B2E8A]">
          {icon}
        </div>
        <div className="text-lg font-semibold text-[#5B2E8A]">{title}</div>
      </div>
      <div className="text-sm text-slate-600">{description}</div>
    </div>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <li className="flex items-start gap-4">
      <div className="w-10 h-10 bg-[#5B2E8A]/10 text-[#5B2E8A] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
        {icon}
      </div>
      <span className="text-lg flex-1">{text}</span>
    </li>
  );
}

function BackgroundCard({ image, title, subtitle, children, count }) {
  return (
    <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-2xl group">
      <img 
        src={image} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
      
      {/* Top badge */}
      <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="font-bold text-white">{count}</span>
      </div>
      
      <div className="relative p-6 md:p-8 flex flex-col h-full justify-end text-white">
        <div className="text-sm opacity-90 uppercase tracking-wider mb-2">{subtitle}</div>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
        <p className="text-base md:text-lg opacity-90 max-w-md">{children}</p>
      </div>
    </div>
  );
}

function ValuePill({ label }) {
  return (
    <div className="inline-flex items-center justify-center rounded-full px-5 py-2.5 bg-gradient-to-br from-white to-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-semibold text-[#5B2E8A]">
      {label}
    </div>
  );
}

function ActivityCard({ title, description }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="font-semibold text-[#5B2E8A] mb-2">{title}</div>
      <div className="text-sm text-slate-600">{description}</div>
    </div>
  );
}

function PlanItem({ number, title, children }) {
  return (
    <div className="relative">
      <div className="absolute -left-12 w-10 h-10 bg-gradient-to-br from-[#5B2E8A] to-[#F5C542] rounded-full flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-slate-700">{children}</p>
    </div>
  );
}

function InfoItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 bg-[#F5C542] rounded-full"></div>
      <span className="text-slate-700">{text}</span>
    </div>
  );
}

function SocialButton({ icon, label }) {
  return (
    <button 
      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300" 
      aria-label={label}
    >
      {icon}
    </button>
  );
}