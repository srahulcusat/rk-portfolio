# EmailJS Setup Instructions

To enable the contact form to send emails to your Gmail, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as the provider
4. Connect your Gmail account (srahulkumar633@gmail.com)
5. Note down the **Service ID** (something like "service_xxxxx")

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**HTML Body:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Message</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #3b82f6;">New Contact Form Message</h2>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>From:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Subject:</strong> {{subject}}</p>
        </div>

        <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3>Message:</h3>
            <p style="white-space: pre-line;">{{message}}</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">

        <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
        </p>
    </div>
</body>
</html>
```

4. Save the template and note down the **Template ID** (something like "template_xxxxx")

## 4. Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key** (something like "xxxxxxxxxxxxxx")

## 5. Update Your Code
In `src/app/components/contact/contact.ts`, replace the placeholder values:

```typescript
// Replace these with your actual EmailJS credentials
emailjs.init('YOUR_PUBLIC_KEY'); // Your public key here

// In the onSubmit method:
await emailjs.send(
  'YOUR_SERVICE_ID', // Your service ID here
  'YOUR_TEMPLATE_ID', // Your template ID here
  templateParams
);
```

## 6. Test the Form
1. Build and run your portfolio
2. Go to the contact section
3. Fill out and submit the form
4. Check your Gmail for the message

## Troubleshooting

- **Emails not sending**: Check your EmailJS dashboard for error logs
- **Gmail blocking**: Make sure you've allowed less secure apps or set up an app password
- **Rate limits**: Free EmailJS accounts have sending limits (200 emails/month)

## Security Note
Your EmailJS public key is safe to use in frontend code - it's designed for client-side use and doesn't expose sensitive information.