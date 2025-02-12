import React, { useEffect, useState } from "react";
import "../App.css";

const PrivacyPolicy = () => {
	const [privacy, setPrivacy] = React.useState("");
	useEffect(() => {
		fetch("/legal/privacy-policy.htm")
			.then((response) => response.text())
			.then((text) => setPrivacy(text));
	}, []);

	const privacyPolicy = `
    <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><strong><span style="font-size: 16px;">Privacy Policy for SumHelp</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>Effective Date:</strong> January 31, 2025</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">SumHelp (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, and protect your information when you use the SumHelp app.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>1. Information We Collect</strong></span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">We collect the following types of information:</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>1.1 Account Information</strong></span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Email address</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Unique username</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Password</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">This data is used for user authentication, access control, and linking saved data, such as settings, chat history, and user comments.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>1.2 AI Interaction Data</strong></span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">User-submitted prompts and queries</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">AI-generated responses</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Reports on AI-generated content (if flagged by the user)</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">We store chat history only for the duration of an active session. Valid math-related questions may be saved for user reference and resubmission. Users can delete their saved questions at any time.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>1.3 Subscription and Payment Data</strong></span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Managed via RevenueCat</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">We do not collect or store payment details directly</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>1.4 Device and Usage Information</strong></span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">App performance metrics</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Error logs (for debugging and improvements)</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Basic device identifiers (e.g., OS version, app version)</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">This data helps us improve app performance and user experience.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>2. How We Use Your Information</strong></span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">To provide AI-powered calculation assistance</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">To authenticate users and manage accounts</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">To store valid math-related questions for user convenience</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">To process and verify subscriptions through RevenueCat</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">To improve app functionality and performance</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">To moderate AI-generated responses based on user reports</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">To respond to user-submitted comments and inquiries</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>3. Data Sharing and Third-Party Services</strong></span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">We do not sell or share personal data with third parties for marketing purposes. However, we integrate third-party services to enhance our app functionality:</span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;"><strong>RevenueCat</strong>: Manages subscriptions and payments</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;"><strong>Google Ads</strong>: Displays advertisements within the app (if applicable)</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;"><strong>OpenAI API</strong>: Processes AI-generated responses</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">Each third-party service operates under its own privacy policies.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>4. User Controls and Data Retention</strong></span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Users can delete their saved math-related questions</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">AI chat history is cleared when a session ends</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Users can report AI responses using the in-app flagging system</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">We retain only necessary data to provide services and comply with legal obligations.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>5. Data Security</strong></span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">We implement security measures to protect user data, including:</span></p>
<ul style="margin-bottom:0in;margin-top:0in;" type="disc">
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Encrypted storage of sensitive information</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Secure authentication protocols</li>
    <li style="margin: 0in 0in 8pt; font-size: 12px; font-family: Aptos, sans-serif;">Limited data retention practices</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>6. Children&rsquo;s Privacy</strong></span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">SumHelp is not intended for users under the age of 13. We do not knowingly collect personal data from children. If we discover such data, we will delete it immediately.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>7. Changes to This Privacy Policy</strong></span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">We may update this policy to reflect changes in our services. Users will be notified of significant changes through the app.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;"><strong>8. Contact Us</strong></span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">For questions or concerns about this policy, contact us at <strong><span style="line-height: 107%;">sumhelp.contact@gmail.com</span></strong></span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-size:11.0pt;font-family:"Aptos",sans-serif;'><span style="font-size: 12px;">&nbsp;</span></p>
`;

	return (
		<div
			className='drawer-text'
			dangerouslySetInnerHTML={{ __html: privacy }}
		/>
	);
};

export default PrivacyPolicy;
