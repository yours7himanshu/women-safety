
import "./Emergency.css";

function Emergency() {
  // Function to handle the button click and send an email
  const sendAlertEmail = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: ['hdinkar264@gmail.com', 'ayush210042@gmail.com','shivamsaini1072005@gmail.com'],  // List of recipient emails
          message: 'Emergency! Please help.',  // Email message
        }),
      });

      const result = await response.json();
      console.log('Email sent successfully:', result);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="emergency">
      <button onClick={sendAlertEmail}>Emergency?? Press Here!!!</button>
    </div>
  );
}

export default Emergency;
