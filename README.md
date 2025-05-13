##  Target Brand: PayPal

### Why PayPal?
PayPal is a widely recognized financial services platform with millions of users globally. It is a common target in phishing campaigns due to:
- Its direct access to users' financial data
- A familiar and trusted interface, often lowering user suspicion
- The frequent use of PayPal in online shopping and subscriptions

## Email Simulation

The email template included in this project replicates a **“Suspicious Activity Detected”** notice and encourages the recipient to log in to secure their account.

### Email Features:
- **Branding**: Official PayPal logo, colors (`#003087`, `#0070e0`), and font choices
- **Language**: Professional tone, urgency cues (e.g. "suspicious activity", "limited access")
- **Call to Action**: A “Secure My Account” button links to a simulated landing page
- **Password Request**: User is told to log in with their “usual credentials”

## Landing Page

The landing page simulates PayPal’s login page and mimics its visual style and layout. It’s designed to show what a real phishing page might look like while safely demonstrating the concept.

### Features:
- **Authentic Design**: Logo, PayPal blue color palette, and UI components
- **Form Fields**: Email and password input fields with validation
- **Visual Feedback**: Fake success thru login
- **Fake Form Submission**: No actual data is captured or stored

### Pages:
- `index.html` – “How PayPal Works” homepage copy
- `logn/index.html` – Login form interface with redirect simulation

## Development Details

### Key Elements for Authenticity
- Color scheme and fonts match PayPal's official site
- Button shapes, text labels, and form alignment were closely copied
- Proper spacing, box shadows, and header/footer layout

### Simulated Behaviors
- Email triggers redirection to a controlled landing page
- Login form uses `JavaScript` to show a popup without real submission
- After submission, the page redirects to `index.html`

## Deployment (For Security Awareness Training)

In a real organization, this could be deployed using:
1. **Internal Security Awareness Tools**: (e.g. GoPhish, KnowBe4, Lucy Security)
2. **Internal Web Server**: Host with `nginx` or `Apache` on an internal IP or staging domain
3. **Email Server or Phishing Tool**: Send formatted email to selected users for testing
4. **Monitoring**: Use tracking only to count clicks and interactions 



