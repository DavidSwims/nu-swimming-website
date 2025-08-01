// App.js - Replace the entire content with this
import React, { useState } from 'react';
import './App.css';

// Simple Navigation Component
function Navigation({ currentPage, setCurrentPage }) {
    const pages = ['Home', 'Team', 'Legacy'];

    return (
        <nav style={{ backgroundColor: '#4E2A84', padding: '0' }}>
            <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                {pages.map(page => (
                    <li key={page} style={{ flex: 1 }}>
                        <button
                            onClick={() => setCurrentPage(page)}
                            style={{
                                width: '100%',
                                padding: '15px',
                                border: 'none',
                                backgroundColor: currentPage === page ? '#3A1F63' : '#4E2A84',
                                color: 'white',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// Athlete Card Component (reusable!)
function AthleteCard({ name, position, year, hometown, image }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            margin: '20px 0',
            textAlign: 'center',
            borderRadius: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            {image && (
                <img
                    src={`/images/${image}`}
                    alt={`${name}, Northwestern swimmer`}
                    style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '15px'
                    }}
                />
            )}
            <h3 style={{ color: '#4E2A84', marginBottom: '10px' }}>{name}</h3>
            <p><strong>Position:</strong> {position}</p>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Hometown:</strong> {hometown}</p>
        </div>
    );
}

// Interactive Legacy Component
function LegacyContent() {
    const [activeTab, setActiveTab] = useState('values');

    const content = {
        values: (
            <div>
                <h3 style={{ color: '#4E2A84', marginBottom: '20px' }}>Our Core Values</h3>
                <div style={{ backgroundColor: '#f8f9ff', padding: '20px', borderLeft: '5px solid #4E2A84', margin: '10px 0', borderRadius: '5px' }}>
                    <h4 style={{ color: '#4E2A84' }}>Excellence in Performance</h4>
                    <p>We strive for personal bests in every practice, meet, and competition. Excellence isn't just about winning, it's about giving your absolute best effort and constantly improving.</p>
                </div>
                <div style={{ backgroundColor: '#f8f9ff', padding: '20px', borderLeft: '5px solid #4E2A84', margin: '10px 0', borderRadius: '5px' }}>
                    <h4 style={{ color: '#4E2A84' }}>Team Unity</h4>
                    <p>We support each other through tough training sessions and celebrate victories together. Every teammate matters, from walk-ons to scholarship athletes.</p>
                </div>
                <div style={{ backgroundColor: '#f8f9ff', padding: '20px', borderLeft: '5px solid #4E2A84', margin: '10px 0', borderRadius: '5px' }}>
                    <h4 style={{ color: '#4E2A84' }}>Academic Integrity</h4>
                    <p>As Northwestern student-athletes, we maintain the highest academic standards. Our swimmers consistently achieve Dean's List honors.</p>
                </div>
            </div>
        ),
        accomplishments: (
            <div>
                <h3 style={{ color: '#4E2A84', marginBottom: '20px' }}>Program Accomplishments</h3>
                <div style={{ backgroundColor: '#f8f9ff', padding: '20px', borderLeft: '5px solid #4E2A84', margin: '10px 0', borderRadius: '5px' }}>
                    <h4 style={{ color: '#4E2A84' }}>Recent Achievements (2020-2024)</h4>
                    <ul>
                        <li><strong>Big Ten Championships:</strong> 3 individual event winners, 12 All-Big Ten selections</li>
                        <li><strong>NCAA Qualifiers:</strong> 8 swimmers qualified for NCAA Championships</li>
                        <li><strong>School Records:</strong> 15 new school records set across all events</li>
                        <li><strong>Academic Excellence:</strong> Team GPA of 3.6+ for 4 consecutive years</li>
                    </ul>
                </div>
                <div style={{ backgroundColor: '#f8f9ff', padding: '20px', borderLeft: '5px solid #4E2A84', margin: '10px 0', borderRadius: '5px' }}>
                    <h4 style={{ color: '#4E2A84' }}>Academic All-Americans</h4>
                    <ul>
                        <li>2024: 6 swimmers earned Academic All-American honors</li>
                        <li>2023: Team ranked #3 nationally for academic performance</li>
                        <li>Career Total: 45+ Academic All-Americans since 2015</li>
                    </ul>
                </div>
            </div>
        )
    };

    return (
        <div>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <button
                    onClick={() => setActiveTab('values')}
                    style={{
                        backgroundColor: activeTab === 'values' ? '#2A1450' : '#4E2A84',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        margin: '0 10px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s'
                    }}
                >
                    Our Values
                </button>
                <button
                    onClick={() => setActiveTab('accomplishments')}
                    style={{
                        backgroundColor: activeTab === 'accomplishments' ? '#2A1450' : '#4E2A84',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        margin: '0 10px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s'
                    }}
                >
                    Accomplishments
                </button>
            </div>
            <div style={{ minHeight: '300px', transition: 'all 0.3s ease' }}>
                {content[activeTab]}
            </div>
        </div>
    );
}

// Main App Component
function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    const athletes = [
        { name: 'Graysen Bernard', position: 'Back/IM', year: 'Sophomore', hometown: 'Toronto, ON', image: 'Greyson.webp' },
        { name: 'Aleksa Bobar', position: 'Free/Fly', year: 'Senior', hometown: 'Sremska Kamenica, Serbia', image: 'Alexsa.webp' },
        { name: 'Sarah Johnson', position: 'Distance Free', year: 'Junior', hometown: 'Chicago, IL' },
        { name: 'Mike Chen', position: 'Breaststroke', year: 'Freshman', hometown: 'San Francisco, CA' }
    ];

    const renderPage = () => {
        switch(currentPage) {
            case 'Home':
                return (
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ color: '#4E2A84', marginBottom: '20px' }}>Northwestern Swimming & Diving</h1>

                        <img
                            src="/images/Northwesten Swim & Dive Team.jpg"
                            alt="Northwestern Swim & Dive Team group"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                height: '300px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                                marginBottom: '20px'
                            }}
                        />

                        <div style={{
                            backgroundColor: '#f8f9ff',
                            padding: '30px',
                            borderRadius: '10px',
                            margin: '20px 0',
                            border: '2px solid #4E2A84'
                        }}>
                            <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                                Welcome to the Northwestern University Swimming and Diving team website.
                                Here you can find information about our team, achievements, and program values.
                            </p>
                            <button
                                onClick={() => setCurrentPage('Team')}
                                style={{
                                    backgroundColor: '#4E2A84',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    margin: '10px',
                                    fontWeight: 'bold',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#3A1F63'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#4E2A84'}
                            >
                                Meet Our Team
                            </button>
                            <button
                                onClick={() => setCurrentPage('Legacy')}
                                style={{
                                    backgroundColor: '#4E2A84',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    margin: '10px',
                                    fontWeight: 'bold',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#3A1F63'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#4E2A84'}
                            >
                                Our Legacy
                            </button>
                        </div>
                        <div style={{
                            backgroundColor: '#e8e8e8',
                            padding: '20px',
                            borderRadius: '8px',
                            marginTop: '30px'
                        }}>
                            <h3 style={{ color: '#4E2A84' }}>Contact Information</h3>
                            <p>Head Coach: rachel.strattonmills@northwestern.edu</p>
                            <p>Follow us on Instagram: @nuswimdive</p>
                        </div>
                    </div>
                );

            case 'Team':
                return (
                    <div>
                        <h1 style={{ color: '#4E2A84', textAlign: 'center' }}>
                            Our 2024-2025 Team
                        </h1>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '20px',
                            marginTop: '20px'
                        }}>
                            {athletes.map((athlete, index) => (
                                <AthleteCard key={index} {...athlete} />
                            ))}
                        </div>
                    </div>
                );

            case 'Legacy':
                return (
                    <div>
                        <h1 style={{ color: '#4E2A84', textAlign: 'center' }}>Our Legacy</h1>

                        <div style={{ textAlign: 'center', margin: '20px 0' }}>
                            <img
                                src="/images/Northwesten Alumni.jpg"
                                alt="Northwestern Swimming and Diving alumni group"
                                style={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    height: '300px',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                            />
                        </div>

                        <p style={{ textAlign: 'center', fontSize: '16px', margin: '20px 0' }}>
                            Northwestern University has a proud swimming and diving tradition dating back decades.
                        </p>
                        <LegacyContent />
                    </div>
                );

            default:
                return <div>Page not found</div>;
        }
    };

    return (
        <div className="App">
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px',
                backgroundColor: '#ffffff',
                minHeight: '100vh'
            }}>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;