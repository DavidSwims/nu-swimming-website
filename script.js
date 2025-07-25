document.addEventListener('DOMContentLoaded', function() {
    
    const valuesBtn = document.getElementById('values-btn');
    const accomplishmentsBtn = document.getElementById('accomplishments-btn');
    const contentDiv = document.getElementById('legacy-content');
    
    if (valuesBtn && accomplishmentsBtn && contentDiv) {
        
        const valuesHTML = `
            <h3>Our Core Values</h3>
            
            <div style="background: #f8f9ff; border-left: 5px solid #4E2A84; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h4>Excellence in Performance</h4>
                <p>We strive for personal bests in every practice, meet, and competition. Excellence isn't just about winning, it's about giving your absolute best effort and constantly improving.</p>
            </div>
            
            <div style="background: #f8f9ff; border-left: 5px solid #4E2A84; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h4>Academic Integrity</h4>
                <p>As Northwestern student-athletes, we maintain the highest academic standards. Our swimmers consistently achieve Dean's List honors and pursue challenging academic programs.</p>
            </div>
            
            <div style="background: #f8f9ff; border-left: 5px solid #4E2A84; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h4>Team Unity</h4>
                <p>We support each other through tough training sessions, celebrate victories together, and create lifelong bonds. Every teammate matters, from walk-ons to scholarship athletes.</p>
            </div>
            
            <div style="background: #f8f9ff; border-left: 5px solid #4E2A84; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h4>Mental Toughness</h4>
                <p>Swimming teaches resilience, discipline, and the ability to push through barriers. These skills serve our athletes well beyond their competitive careers.</p>
            </div>
        `;
        
        const accomplishmentsHTML = `
            <h3>Program Accomplishments</h3>
            
            <div style="background: #f8f9ff; border-left: 5px solid #4E2A84; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h4>Recent Achievements (2020-2024)</h4>
                <ul>
                    <li><strong>Big Ten Championships:</strong> 3 individual event winners, 12 All-Big Ten selections</li>
                    <li><strong>NCAA Qualifiers:</strong> 8 swimmers qualified for NCAA Championships</li>
                    <li><strong>School Records:</strong> 15 new school records set across all events</li>
                    <li><strong>Academic Excellence:</strong> Team GPA of 3.6+ for 4 consecutive years</li>
                </ul>
            </div>
            
            <div style="background: #f8f9ff; border-left: 5px solid #4E2A84; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h4>Academic All-Americans</h4>
                <ul>
                    <li>2024: 6 swimmers earned Academic All-American honors</li>
                    <li>2023: Team ranked #3 nationally for academic performance</li>
                    <li>Career Total: 45+ Academic All-Americans since 2015</li>
                </ul>
            </div>
            
            <div style="background: #f8f9ff; border-left: 5px solid #4E2A84; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <h4>Notable Alumni</h4>
                <ul>
                    <li><strong>Olympic Representation:</strong> 3 alumni competed in recent Olympic Games</li>
                    <li><strong>Professional Success:</strong> Alumni working at Fortune 500 companies, medical schools, and law firms</li>
                    <li><strong>Coaching Legacy:</strong> 12 former swimmers now coaching at collegiate level</li>
                </ul>
            </div>
        `;
        
        valuesBtn.addEventListener('click', function() {
            contentDiv.innerHTML = valuesHTML;
            valuesBtn.style.background = '#2A1450';
            accomplishmentsBtn.style.background = '#4E2A84';
        });
        
        accomplishmentsBtn.addEventListener('click', function() {
            contentDiv.innerHTML = accomplishmentsHTML;
            accomplishmentsBtn.style.background = '#2A1450';
            valuesBtn.style.background = '#4E2A84';
        });
        
        valuesBtn.click();
    }
    
    const tablePlaceholder = document.querySelector('.table-placeholder');
    if (tablePlaceholder) {
        const currentDate = new Date();
        const weekStart = new Date(currentDate);
        weekStart.setDate(currentDate.getDate() - currentDate.getDay() + 1);
        
        tablePlaceholder.innerHTML = `
            <div style="text-align: center; margin: 20px 0;">
                <h3>Training Schedule - Week of ${weekStart.toLocaleDateString()}</h3>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);">
                <thead>
                    <tr style="background: #4E2A84; color: white;">
                        <th style="padding: 15px; text-align: left;">Day</th>
                        <th style="padding: 15px; text-align: left;">Morning Session</th>
                        <th style="padding: 15px; text-align: left;">Afternoon Session</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background: #f8f9ff;">
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;"><strong>Monday</strong></td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Distance Set (6:00-8:00 AM)</td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Technique & Starts (3:30-5:30 PM)</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;"><strong>Tuesday</strong></td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Sprint Training (6:00-8:00 AM)</td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Strength Training (3:00-4:30 PM)</td>
                    </tr>
                    <tr style="background: #f8f9ff;">
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;"><strong>Wednesday</strong></td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">IM & Stroke Work (6:00-8:00 AM)</td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Racing Pace (3:30-5:30 PM)</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;"><strong>Thursday</strong></td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Aerobic Base (6:00-8:00 AM)</td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Recovery/Yoga (3:00-4:00 PM)</td>
                    </tr>
                    <tr style="background: #f8f9ff;">
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;"><strong>Friday</strong></td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Speed & Turns (6:00-8:00 AM)</td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Team Meeting (4:00-5:00 PM)</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;"><strong>Saturday</strong></td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Competition/Long Practice (8:00-11:00 AM)</td>
                        <td style="padding: 15px; border-bottom: 1px solid #e0e0e0;">Optional Recovery Swim</td>
                    </tr>
                    <tr style="background: #f8f9ff;">
                        <td style="padding: 15px;"><strong>Sunday</strong></td>
                        <td style="padding: 15px;">Recovery Swim (10:00-11:30 AM)</td>
                        <td style="padding: 15px;">Study Hall/Rest</td>
                    </tr>
                </tbody>
            </table>
            <div style="text-align: center; margin: 25px 0;">
                <button onclick="alert('Schedule refreshed!')" style="background: #4E2A84; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; margin: 0 10px;">Refresh Schedule</button>
            </div>
        `;
    }
});